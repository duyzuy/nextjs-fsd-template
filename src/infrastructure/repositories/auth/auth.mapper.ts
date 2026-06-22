import type { AuthSignedIn, AuthSignedUp, TProfile } from "@/entities/auth/model/auth.model";
import type { GetProfileDto, SignInDto, SignUpDto } from "./auth.dto";

export const toSigninDomain = (dto: SignInDto): AuthSignedIn => {
	return {
		accessToken: dto.accessToken,
		refreshToken: dto.refreshToken,
	};
};

export const toSignUpDomain = (dto: SignUpDto): AuthSignedUp => {
	return {
		id: dto.id,
		name: dto.name,
		email: "",
		username: "",
	};
};

export const toProfileDomain = (dto: GetProfileDto): TProfile => {
	return {
		id: dto.id,
		email: dto.email,
		name: dto.name,
		username: dto.username,
		profile: dto.profile
			? {
					firstName: dto.profile.firstname,
					lastName: dto.profile.lastname,
				}
			: null,
	};
};
