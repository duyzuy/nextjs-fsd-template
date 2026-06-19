import type { SigninPayload, SignupPayload, TProfile, TSignIn, TSignUp } from "../model/auth.type";

export interface IAuthRepository {
	signin(payload: SigninPayload, init?: RequestInit): Promise<TSignIn>;
	signup(payload: SignupPayload, init?: RequestInit): Promise<TSignUp>;
	me(init?: RequestInit): Promise<TProfile>;
}
