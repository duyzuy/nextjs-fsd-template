import type {
	AuthSignedIn,
	AuthSignedUp,
	SigninPayload,
	SignupPayload,
	TProfile,
} from "../model/auth.model";

export interface IAuthRepository {
	signin(payload: SigninPayload, init?: RequestInit): Promise<AuthSignedIn>;
	signup(payload: SignupPayload, init?: RequestInit): Promise<AuthSignedUp>;
	me(init?: RequestInit): Promise<TProfile>;
}
