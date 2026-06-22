import Image from "next/image";
import { Card, CardContent } from "@/components/base/card";
import { FieldDescription } from "@/components/base/field";
import { SignupForm } from "@/features/auth/components/SignupForm";
import { cn } from "@/utils/shadcn";

export default function SignUpPage() {
	return (
		<div className="container mx-auto h-screen flex items-center justify-center">
			<div className={cn("flex flex-col gap-6 w-full max-w-3xl")}>
				<Card className="overflow-hidden p-0">
					<CardContent className="grid p-0 md:grid-cols-2">
						<SignupForm />
						<div className="relative hidden bg-muted md:block">
							<Image
								src="/assets/images/alps.jpg"
								alt="Image"
								width={900}
								height={900}
								className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
							/>
						</div>
					</CardContent>
				</Card>
				<FieldDescription className="px-6 text-center">
					By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
					<a href="#">Privacy Policy</a>.
				</FieldDescription>
			</div>
		</div>
	);
}
