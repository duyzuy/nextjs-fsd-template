import { cache } from "react";
import { authRepository } from "@/infrastructure/repositories/auth/auth.repository";

export const getProfile = cache(async (token: string) => {
	try {
		return authRepository.me({ accessToken: token });
	} catch (err) {
		console.log(err);
		return null;
	}
});
