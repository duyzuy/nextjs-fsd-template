import UserList from "@/features/user/components/UserList";
export interface UserCardProps {
	className?: string;
}

const UserCard: React.FC<UserCardProps> = () => {
	return (
		<div>
			this is card
			<UserList />
		</div>
	);
};
export default UserCard;
