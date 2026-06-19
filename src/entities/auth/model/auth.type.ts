export type SigninPayload = { email: string; password: string };
export type SignupPayload = { email: string; password: string };

export type TSignIn = { accessToken: string; refreshToken: string };

export type TProfile = {
	id: string;
	email: string;
	name: string;
	username: string;
	profile: {
		firstName: string;
		lastName: string;
	} | null;
};

export type TSignUp = {
	id: string;
	name: string;
	username: string;
	email: string;
};
