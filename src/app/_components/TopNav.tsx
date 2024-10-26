"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";
import { UploadButton } from "~/utils/uploadthing";

const TopNav = () => {
	const router = useRouter();
	return (
		<nav className="flex items-center justify-between border-b p-4 text-xl font-semibold">
			<div>Gallery</div>
			<div className="flex flex-row gap-4">
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UploadButton
						endpoint={"imageUploader"}
						onClientUploadComplete={() => {
							router.refresh();
						}}
					/>
					<UserButton />
				</SignedIn>
			</div>
		</nav>
	);
};

export default TopNav;
