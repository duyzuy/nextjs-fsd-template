import qs from "qs";
import { HttpError } from "./errors/http-error";

export interface RequestOptions extends RequestInit {
	params?: Record<string, string | number | undefined>;
	accessToken?: string;
	_retry?: boolean; // internal — prevents infinite retry loops
}

const buildUrl = (url: string, ver = "v1") => {
	if (!process.env.NEXT_PUBLIC_API_URL) {
		throw new Error("NEXT_PUBLIC_API_URL is missing");
	}

	if (url.startsWith("http")) return url;

	const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/${ver}`;

	return url.startsWith("/") ? `${baseUrl}${url}` : `${baseUrl}/${url}`;
};

const buildBody = (body?: unknown): RequestInit["body"] | undefined => {
	if (body === undefined) return undefined;
	if (body instanceof FormData) return body;

	return JSON.stringify(body);
};

const request = async <T>(url: string, requestOptions: RequestOptions = {}): Promise<T> => {
	const { params, headers, _retry, method, accessToken, ...restRequest } = requestOptions;

	let baseUrl = buildUrl(url, "v1");

	const isFormData = requestOptions.body instanceof FormData;

	if (method === "GET" && params) {
		baseUrl = baseUrl.concat("?", qs.stringify(params));
	}

	try {
		const response = await fetch(baseUrl, {
			...restRequest,
			method,
			headers: {
				...(isFormData ? {} : { "Content-Type": "application/json" }),
				...(accessToken && { Authorization: `Bearer ${accessToken}` }),
				...headers,
			},
		});
		const contentType = response.headers.get("content-type");
		const data = contentType?.includes("application/json") ? await response.json() : null;

		if (!response.ok) {
			throw new HttpError(
				response.status,
				data?.code,
				data?.message || response.statusText,
				data,
			);
		}

		return data as T;
	} catch (error) {
		if (error instanceof HttpError) {
			throw error;
		}
		throw new HttpError(500, "INTERNAL_SERVER_ERROR", "Unexpected error", error);
	}
};

const get = <T>(url: string, options?: RequestOptions) =>
	request<T>(`${url}`, {
		...options,
		method: "GET",
	});

const post = <T>(url: string, body?: unknown, options?: RequestOptions) =>
	request<T>(url, {
		...options,
		method: "POST",
		body: buildBody(body),
	});

const put = <T>(url: string, body?: unknown, options?: RequestOptions) =>
	request<T>(url, {
		...options,
		method: "PUT",
		body: buildBody(body),
	});

const del = <T>(url: string, options?: RequestOptions) =>
	request<T>(url, {
		...options,
		method: "DELETE",
	});

export const client = {
	get,
	post,
	put,
	delete: del,
};
