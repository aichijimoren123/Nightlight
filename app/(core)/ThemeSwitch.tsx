"use client";

import { useTheme } from "@/components/ThemeProvide/ThemeProvider";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
