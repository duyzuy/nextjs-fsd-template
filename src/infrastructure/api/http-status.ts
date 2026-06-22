// import { NextResponse } from "next/server";
// import type { DomainError } from "./errors/domain-error";
// export type SuccessResponse<T> = {
// 	success: true;
// 	data: T;
// };

// export type ErrorResponse<E> = {
// 	success: false;
// 	error: E;
// };

// export type ApiError<M = unknown> = {
// 	message: string;
// 	code?: string;
// 	status?: number;
// 	meta?: M;
// };

// export const HttpStatus = {
// 	// 2xx Success
// 	OK: 200,
// 	CREATED: 201,
// 	ACCEPTED: 202,
// 	NO_CONTENT: 204,

// 	// 3xx Redirection
// 	MOVED_PERMANENTLY: 301,
// 	FOUND: 302,
// 	NOT_MODIFIED: 304,

// 	// 4xx Client Errors
// 	BAD_REQUEST: 400,
// 	UNAUTHORIZED: 401,
// 	PAYMENT_REQUIRED: 402,
// 	FORBIDDEN: 403,
// 	NOT_FOUND: 404,
// 	METHOD_NOT_ALLOWED: 405,
// 	CONFLICT: 409,
// 	GONE: 410,
// 	UNPROCESSABLE_ENTITY: 422,
// 	TOO_MANY_REQUESTS: 429,

// 	// 5xx Server Errors
// 	INTERNAL_SERVER_ERROR: 500,
// 	NOT_IMPLEMENTED: 501,
// 	BAD_GATEWAY: 502,
// 	SERVICE_UNAVAILABLE: 503,
// 	GATEWAY_TIMEOUT: 504,
// } as const;

// export type HttpResponse<TSuccess, TError> = SuccessResponse<TSuccess> | ErrorResponse<TError>;

// const ok = <T>(data: T) =>
// 	NextResponse.json<SuccessResponse<T>>({ success: true, data }, { status: HttpStatus.OK });

// const created = <T>(data: T) =>
// 	NextResponse.json<SuccessResponse<T>>({ success: true, data }, { status: HttpStatus.CREATED });

// const fail = <M = unknown>(status: number, message: string, code = "INTERNAL_ERROR", meta?: M) =>
// 	NextResponse.json<ErrorResponse<ApiError<M>>>(
// 		{ success: false, error: { message, code, meta, status } },
// 		{ status },
// 	);

// const fromDomainError = (error: DomainError) =>
// 	fail(error.status, error.message, error.code, error.meta);

// export const http = {
// 	ok,
// 	created,
// 	fromDomainError,
// 	fail,
// 	badRequest: (message = "Bad request", code = "BAD_REQUEST", errors?: unknown) =>
// 		fail(HttpStatus.BAD_REQUEST, message, code, errors),

// 	unauthorized: (message = "Unauthorized", code = "UNAUTHORIZED") =>
// 		fail(HttpStatus.UNAUTHORIZED, message, code),

// 	forbidden: (message = "Forbidden", code = "FORBIDDEN") =>
// 		fail(HttpStatus.FORBIDDEN, message, code),

// 	notFound: (message = "Not found", code = "NOT_FOUND") =>
// 		fail(HttpStatus.NOT_FOUND, message, code),

// 	conflict: (message = "Conflict", code = "CONFLICT") => fail(HttpStatus.CONFLICT, message, code),

// 	serverError: (message = "Internal server error", code = "INTERNAL_ERROR") =>
// 		fail(HttpStatus.INTERNAL_SERVER_ERROR, message, code),
// };
