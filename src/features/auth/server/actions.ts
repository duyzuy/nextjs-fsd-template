import { HttpError } from "@/infrastructure/api/errors/http-error";
import { authRepository } from "@/infrastructure/repositories/auth/auth.repository";

export async function getMe(token: string) {
	try {
		const data = authRepository.me({ accessToken: token });
		return { success: true, data: data };
	} catch (err) {
		if (err instanceof HttpError) {
			return { success: false, error: err.message };
		}
	}
}
