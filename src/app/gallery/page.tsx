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
	searchParams,
}: {
	searchParams: Promise<{ q?: string; sort?: string }>;
}) {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
			<Suspense fallback={<GalleryControlsSkeleton />}>
				<GalleryControls />
			</Suspense>

			<Suspense
				fallback={
					<ViewTransition exit="slide-up" default="none">
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
