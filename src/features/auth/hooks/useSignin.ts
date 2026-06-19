import { useState } from "react";
import type { SigninPayload, TSignIn } from "@/entities/auth/model/auth.type";
import { HttpError } from "@/infrastructure/api/errors/http-error";
import { authRepository } from "@/infrastructure/repositories/auth/auth.repository";

type UseSignInReturn = {
	data?: TSignIn;
	isLoading: boolean;
	error?: string;
	onSignIn: (payload: SigninPayload) => void;
};
type UseSignInOptions = {
	onSuccess?: (data: TSignIn) => void;
	onError?: (error: string) => void;
};
type UseSignIn<T> = (options?: UseSignInOptions) => T;

const useSignin: UseSignIn<UseSignInReturn> = (options) => {
	const [data, setData] = useState<TSignIn>();
	const [error, setError] = useState<string>();
	const [isLoading, setIsLoading] = useState(false);

	const onSignIn: UseSignInReturn["onSignIn"] = async (payload) => {
		setIsLoading(true);
		try {
			const response = await authRepository.signin(
				{
					email: payload.email,
					password: payload.password,
				},
				{ credentials: "include" },
			);
			setData(response);
			setError(undefined);
			options?.onSuccess?.(response);
		} catch (error) {
			const errorMessage = error instanceof HttpError ? error.message : "Loi dang nhap";
			setError(errorMessage);
			options?.onError?.(errorMessage);
		} finally {
			setIsLoading(false);
		}
	};
	return { onSignIn, isLoading, error, data };
};
export default useSignin;
