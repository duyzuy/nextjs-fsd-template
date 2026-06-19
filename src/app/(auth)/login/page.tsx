import SigninForm from "@/features/auth/components/SigninForm";

type LoginPageProps = {};
export default function LoginPage() {
	return (
		<div className="container mx-auto">
			<h1>login page</h1>
			<div className="form max-w-2xl mx-auto">
				<SigninForm />
			</div>
		</div>
	);
}
