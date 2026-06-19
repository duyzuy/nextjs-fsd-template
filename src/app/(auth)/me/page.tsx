import { redirect } from "next/navigation";
import Authorized from "@/features/auth/components/Authorized";
import SignoutButton from "@/features/auth/components/SignoutButton";
import { getProfile } from "@/features/profile/server";
import { requireAuth } from "@/lib/require-auth";

interface ProfilePageProps {
	className?: string;
}

export default async function ProfilePage(props: ProfilePageProps) {
	const { token } = await requireAuth();
	const data = await getProfile(token);

	if (!data) {
		redirect("/");
	}
	return (
		<div className="container mx-auto">
			<h1>Thong tin tai khoan</h1>
			<div className="form max-w-2xl mx-auto">
				{/* <MeCard /> */}
				{data?.name}
			</div>
			<Authorized>
				<SignoutButton />
			</Authorized>
		</div>
	);
}
