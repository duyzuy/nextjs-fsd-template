import type { StateCreator } from "zustand";

export type UserInformationSliceState = {
	information?: {
		id: string;
		email: string;
		name: string;
		username: string;
	};
};
export type UserInformationSliceAction = {
	setInformation: (userInfo: UserInformationSliceState["information"]) => void;
};

export type UserInformationSlice = {
	userInformation: UserInformationSliceState & UserInformationSliceAction;
};
export const createUserInformationSlice: (
	init?: UserInformationSliceState,
) => StateCreator<UserInformationSlice> = (init) => (set, get, api) => ({
	userInformation: {
		...init,
		setInformation: (userInfo) => {
			set((state) => ({
				...state,
				userInformation: {
					...state.userInformation,
					information: userInfo,
				},
			}));
		},
	},
});
