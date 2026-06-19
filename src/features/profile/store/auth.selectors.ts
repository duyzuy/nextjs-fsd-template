import type { UserInformationSlice } from "./user-information.slice";

export const selectUserInformation = (state: UserInformationSlice) =>
	state.userInformation.information;
