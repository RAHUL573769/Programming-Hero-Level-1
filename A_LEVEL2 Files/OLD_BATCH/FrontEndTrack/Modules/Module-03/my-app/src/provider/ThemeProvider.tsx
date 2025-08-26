import { createContext, ReactNode, useState } from "react";

export type TThemeContext = {
	dark: boolean;
	setDark: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TThemeProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: TThemeProviderProps) => {
	const [dark, setDark] = useState(false);
	const values: TThemeContext = { dark, setDark };

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
