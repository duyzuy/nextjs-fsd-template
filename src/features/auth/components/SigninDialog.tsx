"use client";
import { useRouter } from "next/navigation";
import type React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/base/dialog";
import { useAppStore } from "@/stores/app-store";
import useSignin from "../hooks/useSignin";
import {
	selectActiveModal,
	selectAuthOnCloseModal,
	selectAuthOnShowModal,
} from "../store/auth.selectors";
import SigninForm from "./SigninForm";

type SigninDialogProps = {};

const SigninDialog: React.FC<SigninDialogProps> = () => {
	const router = useRouter();
	const activeModal = useAppStore(selectActiveModal);
	const openDialog = useAppStore(selectAuthOnShowModal);
	const closeDialog = useAppStore(selectAuthOnCloseModal);

	const handleOpenChange = (open: boolean) => {
		open ? openDialog("signin") : closeDialog();
	};

	const handleOpenSignupDialog = () => {
		openDialog("signup");
	};
	const isShowModal = activeModal === "signin";

	const { onSignIn, error, isLoading } = useSignin({
		onSuccess() {
			router.refresh();
			closeDialog();
		},
	});

	return (
		<Dialog defaultOpen={isShowModal} open={isShowModal} onOpenChange={handleOpenChange}>
			<DialogContent>
				<SigninForm
					onSubmit={onSignIn}
					error={error}
					isLoading={isLoading}
					onClickSignup={handleOpenSignupDialog}
				/>
			</DialogContent>
		</Dialog>
	);
};

export default SigninDialog;
