import { authRepository } from "@/infrastructure/repositories/auth/auth.repository";

export async function getMe(token: string) {
	try {
		return authRepository.me({ headers: { Authorization: `Bearer ${token}` } });
	} catch (err) {
		console.log(err);
	}
}
