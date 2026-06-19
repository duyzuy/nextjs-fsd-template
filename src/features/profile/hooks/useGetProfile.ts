import { useQuery } from "@tanstack/react-query";
import { authRepository } from "@/infrastructure/repositories/auth/auth.repository";

const useGetProfile = () => {
	return useQuery({
		queryKey: ["get-profile"],
		queryFn: () => authRepository.me({ credentials: "include" }),
	});
};
export default useGetProfile;
