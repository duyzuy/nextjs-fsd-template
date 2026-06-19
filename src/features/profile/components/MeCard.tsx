"use client";
import useGetProfile from "../hooks/useGetProfile";

interface MeCardProps {
	className?: string;
}
const MeCard: React.FC<MeCardProps> = () => {
	const { isLoading, error, data } = useGetProfile();
	if (isLoading) {
		return <div>...loading</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	return <div className="me-card">{data?.name}</div>;
};
export default MeCard;
