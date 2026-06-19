"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/shared/ui/base/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/shared/ui/base/field";
import { Input } from "@/shared/ui/base/input";
import useSignin from "../hooks/useSignin";

const SigninSchema = z.object({
	email: z.string().min(1, "Email khong bo trong").email("Email khong hop le"),
	password: z.string().min(1, { error: "Password khong bo trong" }),
});

export type SigninFormData = z.infer<typeof SigninSchema>;
export interface SigninFormProps {
	className?: string;
	onSubmit?: (formData: SigninFormData) => void;
	isLoading?: boolean;
	error?: string;
}

const SigninForm: React.FC<SigninFormProps> = ({ error, onSubmit, isLoading }) => {
	const form = useForm<SigninFormData>({
		defaultValues: { email: "", password: "" },
		resolver: zodResolver(SigninSchema),
	});

	const { control, handleSubmit } = form;

	return (
		<div className="login-form">
			<FormProvider {...form}>
				<form {...(onSubmit ? { onSubmit: handleSubmit(onSubmit) } : {})}>
					{error}
					<FieldGroup>
						<Controller
							control={control}
							name="email"
							render={({ fieldState: { error }, field }) => (
								<Field data-invalid={!!error?.message}>
									<FieldLabel htmlFor="input-demo-api-key">Email</FieldLabel>
									<Input
										id="input-email"
										placeholder="Email"
										autoComplete="email"
										type="text"
										{...field}
									/>
									<FieldDescription>{error?.message}</FieldDescription>
								</Field>
							)}
						/>
						<Controller
							control={control}
							name="password"
							render={({ fieldState: { error }, field }) => (
								<Field data-invalid={!!error?.message}>
									<FieldLabel htmlFor="input-password">Password</FieldLabel>
									<Input
										id="input-password"
										placeholder="Password"
										autoComplete="current-password"
										type="password"
										{...field}
									/>
									<FieldDescription>{error?.message}</FieldDescription>
								</Field>
							)}
						/>
						<Field>
							<Button type="submit" disabled={isLoading}>
								{isLoading ? "Loading..." : "Login"}
							</Button>
						</Field>
					</FieldGroup>
				</form>
			</FormProvider>
		</div>
	);
};
export default SigninForm;
