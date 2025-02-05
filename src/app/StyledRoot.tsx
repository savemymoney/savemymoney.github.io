"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../config/mui/theme";

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
