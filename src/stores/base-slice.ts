import type { StateCreator } from "zustand";
import type { AppStore } from "./app-store/app.store";

export type SliceCreator<TSlice> = StateCreator<AppStore, [], [], TSlice>;

export function createSlice<TNamespace extends string, TSlice>({
	namespace,
	slice,
}: {
	namespace: TNamespace;
	slice: SliceCreator<TSlice>;
}): SliceCreator<Record<TNamespace, TSlice>> {
	return (set, get, api) =>
		({
			[namespace]: slice(set, get, api),
		}) as Record<TNamespace, TSlice>;
}
