"use client";
import type React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/base/dialog";
import { useAppStore } from "@/stores/app-store/AppStoreProvider";
import {
	selectActiveModal,
	selectAuthOnCloseModal,
	selectAuthOnShowModal,
} from "../store/auth.selectors";

type SignupDialogProps = {
	className?: string;
};

const SignupDialog: React.FC<SignupDialogProps> = () => {
	const activeModal = useAppStore(selectActiveModal);
	const openDialog = useAppStore(selectAuthOnShowModal);
	const closeDialog = useAppStore(selectAuthOnCloseModal);

	const handleOpenChange = (open: boolean) => {
		open ? openDialog("signup") : closeDialog();
	};

	const handleOpenSignInModal = () => {
		openDialog("signin");
	};
	const isShowModal = activeModal === "signup";
	return (
		<Dialog defaultOpen={isShowModal} open={isShowModal} onOpenChange={handleOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Signup</DialogTitle>
				</DialogHeader>
				<>asdf</>
				<div>
					<p className="text-center">
						{`${"if you already have account?"}`}{" "}
						<button type="button" onClick={handleOpenSignInModal}>
							SignIn
						</button>
					</p>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default SignupDialog;
