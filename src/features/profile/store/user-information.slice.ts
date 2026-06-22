import type { SliceCreator } from "@/stores/base-slice";
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
export const createUserInformationSlice =
	(init: UserInformationSliceState): SliceCreator<UserInformationSlice> =>
	(set, get, api) => ({
		userInformation: {
			...init,
			setInformation: (userInfo) => {
				set((state) => ({
					userInformation: {
						...state.userInformation,
						information: userInfo,
					},
				}));
			},
		},
	});
