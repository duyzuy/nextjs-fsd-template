import { useAppStore } from "@/stores/app-store/AppStoreProvider";
import { selectUserInformation } from "../store/auth.selectors";

export const useGetUserInformationStore = () => {
	return useAppStore(selectUserInformation);
};
