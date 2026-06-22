"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/base/button";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "@/components/base/field";
import { Input } from "@/components/base/input";
import { cn } from "@/lib/utils";
import useSignin from "../hooks/useSignin";
import SocialsLogin from "./SocialsLogin";

const SigninSchema = z.object({
	email: z.string().min(1, "Email khong bo trong").email("Email khong hop le"),
	password: z.string().min(1, { error: "Password khong bo trong" }),
});

export type SigninFormData = z.infer<typeof SigninSchema>;
export interface SigninFormProps {
	className?: string;
	onClickSignup?: () => void;
}

const SigninForm: React.FC<SigninFormProps> = ({ className, onClickSignup }) => {
	const router = useRouter();

	const form = useForm<SigninFormData>({
		defaultValues: { email: "", password: "" },
		resolver: zodResolver(SigninSchema),
	});

	const { control, handleSubmit } = form;

	const { onSignIn, error, isLoading } = useSignin({
		onSuccess() {
			router.refresh();
		},
	});

	return (
		<div className={cn("signin-form", className)}>
			<FormProvider {...form}>
				<form onSubmit={handleSubmit(onSignIn)}>
					<FieldGroup>
						<div className="text-center">
							<div className="text-xl">Welcome back</div>
							<div>Login to explore and get free promotion.</div>
						</div>
						<Controller
							control={control}
							name="email"
							render={({ fieldState, field }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="input-email">Email</FieldLabel>
									<Input
										{...field}
										id="input-email"
										placeholder="Email"
										autoComplete="email"
										type="email"
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							control={control}
							name="password"
							render={({ fieldState, field }) => (
								<Field data-invalid={fieldState.invalid}>
									<div className="flex items-center">
										<FieldLabel htmlFor="input-password">Password</FieldLabel>
										<a
											href="#"
											className="ml-auto text-xs underline-offset-4 hover:underline"
										>
											Forgot your password?
										</a>
									</div>
									<Input
										{...field}
										id="input-password"
										placeholder="Password"
										autoComplete="current-password"
										type="password"
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Field>
							<Button type="submit" disabled={isLoading}>
								{isLoading ? "Loading..." : "Login"}
							</Button>
						</Field>
						<FieldSeparator className="*:data-[slot=field-separator-content]:bg-card my-2">
							Or continue with
						</FieldSeparator>
						<SocialsLogin />
						<FieldDescription className="text-center">
							Don&apos;t have an account?{" "}
							<button
								type="button"
								onClick={onClickSignup}
								className="cursor-pointer"
							>
								Sign up
							</button>
						</FieldDescription>
					</FieldGroup>
				</form>
			</FormProvider>
		</div>
	);
};
export default SigninForm;
