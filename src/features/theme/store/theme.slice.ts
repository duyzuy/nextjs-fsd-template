import { createSlice } from "@/stores/base-slice";

const NAME_SPACE = "theme" as const;
type ThemeMode = "dark" | "light" | "system";

export type ThemeSliceState = {
	themeMode: ThemeMode;
};
export type ThemeSliceAction = {
	setThemeMode: (theme: ThemeMode) => void;
};

export type ThemeSlice = { [NAME_SPACE]: ThemeSliceState & ThemeSliceAction };

const defaultState: ThemeSliceState = {
	themeMode: "system",
};

export const createThemeSlice = createSlice<"theme", ThemeSlice["theme"]>({
	namespace: NAME_SPACE,
	slice: (set, get, api) => ({
		...defaultState,
		setThemeMode: (theme: ThemeMode) => {
			set((state) => ({
				theme: {
					...state.theme,
					themeMode: theme,
				},
			}));
		},
	}),
});
