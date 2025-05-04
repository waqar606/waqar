"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <Fragment>
      <Toaster />
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Fragment>
  );
}
