import { Suspense, ViewTransition } from "react";
import {
	GalleryContent,
	GalleryContentSkeleton,
} from "@/features/galleries/components/gallery-content";
import {
	GalleryControls,
	GalleryControlsSkeleton,
} from "@/features/galleries/components/gallery-control";

export default async function PhotoPage({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ q?: string; sort?: string }>;
}) {
	const { id } = await params;

	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<Suspense fallback={<GalleryControlsSkeleton />}>
				<GalleryControls />
			</Suspense>

			<Suspense
				fallback={
					<ViewTransition exit="slide-down" default="none">
						<GalleryContentSkeleton />
					</ViewTransition>
				}
			>
				<ViewTransition enter="slide-up" default="none">
					<GalleryContent searchParams={searchParams} />
				</ViewTransition>
			</Suspense>
		</div>
	);
}
