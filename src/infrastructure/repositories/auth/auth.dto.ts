export interface SignInDto {
	accessToken: string;
	refreshToken: string;
}

export interface SignUpDto {
	id: string;
	name: string;
}

export interface GetProfileDto {
	id: string;
	name: string;
	email: string;
	username: string;
	createdAt: string;
	updatedAt: string;
	profile: {
		firstname: string;
		lastname: string;
		address: string | null;
	};
}
