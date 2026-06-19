"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/base/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/base/dropdown-menu";
import { useGetUserInformationStore } from "../hooks/useGetProfileStore";

function UserInformationDropdown() {
	const [open, setOpen] = useState(false);

	const userInfo = useGetUserInformationStore();

	const fallbackName = userInfo?.name
		.split(" ")
		.map((char) => char.at(0))
		.join("")
		.toUpperCase();

	const closeModal = () => setOpen(false);

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger>{userInfo?.name}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40">
				<DropdownMenuItem className="light:bg-gray-100 dark:bg-slate-400/10">
					<div className="flex items-center gap-2 w-full">
						<Avatar>
							<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
							<AvatarFallback>{fallbackName}</AvatarFallback>
						</Avatar>
						<div className="flex-1">
							<span className="font-semibold">{userInfo?.name}</span>
							<span className="line-clamp-1 inline-block text-xs">
								{userInfo?.email}
							</span>
						</div>
					</div>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuItem>
					<Link href={"/me"} onClick={closeModal}>
						Profile
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={closeModal}>Setting</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default UserInformationDropdown;
