import { ENDPOINTS } from "@/constants/endpoints";
import type { SignupPayload, TProfile } from "@/entities/auth/model/auth.type";
import type { IAuthRepository } from "@/entities/auth/repository/auth.repository.interface";
import { client, type RequestOptions } from "@/infrastructure/api";
import {
	toProfileDomain,
	toSigninDomain,
	toSignUpDomain,
} from "@/infrastructure/repositories/auth/auth.mapper";
import type { GetProfileDto, SignInDto, SignUpDto } from "./auth.dto";

export class AuthRepository implements IAuthRepository {
	async me(options?: RequestOptions): Promise<TProfile> {
		const data = await client.get<GetProfileDto>(ENDPOINTS.auth.me, options);
		return toProfileDomain(data);
	}
	async signup(payload: SignupPayload) {
		const data = await client.post<SignUpDto>(ENDPOINTS.auth.signup, payload);
		return toSignUpDomain(data);
	}
	async signin(payload: SignupPayload, options?: RequestOptions) {
		const data = await client.post<SignInDto>(ENDPOINTS.auth.signin, payload, options);
		return toSigninDomain(data);
	}
	async signout(options?: RequestOptions) {
		const data = await client.post<SignInDto>(ENDPOINTS.auth.signout, undefined, options);
		return toSigninDomain(data);
	}
}

export const authRepository = new AuthRepository();
