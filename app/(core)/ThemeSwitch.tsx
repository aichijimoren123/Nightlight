"use client";
import { Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <button>
        <Sun />
      </button>
    </div>
  );
}
