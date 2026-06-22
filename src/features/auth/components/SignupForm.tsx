"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
	FieldSeparator,
} from "@/components/base/field";
import { Input } from "@/components/base/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/shadcn";
import SocialsLogin from "./SocialsLogin";

const SignUpSchema = z
	.object({
		name: z.string().min(8),
		email: z.email(),
		password: z.string().min(8),
		passwordConfirm: z.string(),
	})
	.refine((ctx) => ctx.password === ctx.passwordConfirm, {
		error: "Mật khẩu không khớp.",
	});
type SignUpForm = z.infer<typeof SignUpSchema>;
interface SignupFormProps {
	className?: string;
	onClickSignIn?: () => void;
}
export function SignupForm({ className, onClickSignIn }: SignupFormProps) {
	const form = useForm<SignUpForm>({
		resolver: zodResolver(SignUpSchema),
		defaultValues: { email: "", name: "", password: "", passwordConfirm: "" },
	});

	const { control } = form;
	const submitForm: SubmitHandler<SignUpForm> = (data) => {};
	return (
		<div className={cn("flex flex-col gap-6", className)}>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(submitForm)} className="p-6 md:p-8">
					<FieldGroup>
						<div className="flex flex-col items-center gap-2 text-center">
							<h1 className="text-2xl font-bold">Tạo tài khoản</h1>
							<p className="text-sm text-balance text-muted-foreground">
								Nhập email tạo tài khoản của bạn
							</p>
						</div>

						<Controller
							name="name"
							control={control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="name">Họ và tên</FieldLabel>
									<Input
										{...field}
										id="name"
										type="text"
										placeholder="Họ và tên"
										required
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>

						<Controller
							name="email"
							control={control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="name">Email</FieldLabel>
									<Input
										{...field}
										id="name"
										type="email"
										placeholder="m@example.com"
										required
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Field>
							<Field className="grid grid-cols-2 gap-4">
								<Controller
									name="email"
									control={control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="password">Mật khẩu</FieldLabel>
											<Input
												{...field}
												id="password"
												type="password"
												required
											/>
											{fieldState.invalid && (
												<FieldError errors={[fieldState.error]} />
											)}
										</Field>
									)}
								/>
								<Controller
									name="email"
									control={control}
									render={({ field, fieldState }) => (
										<Field data-invalid={fieldState.invalid}>
											<FieldLabel htmlFor="confirm-password">
												Xác nhận mật khẩu
											</FieldLabel>
											<Input
												{...field}
												id="confirm-password"
												type="password"
												required
											/>
											{fieldState.invalid && (
												<FieldError errors={[fieldState.error]} />
											)}
										</Field>
									)}
								/>
							</Field>
							<FieldDescription>Must be at least 8 characters long.</FieldDescription>
						</Field>
						<Field>
							<Button type="submit">Create Account</Button>
						</Field>
						<FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
							Hoặc
						</FieldSeparator>
						<SocialsLogin />
						<FieldDescription className="text-center">
							Đã có tài khoản? <a href="#">Đăng nhập</a>
						</FieldDescription>
					</FieldGroup>
				</form>
			</FormProvider>
		</div>
	);
}
