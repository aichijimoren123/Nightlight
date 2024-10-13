"use client";
import { ThemeProvider } from "@/components/ThemeProvide/ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

const queryClient = new QueryClient();

export function Provider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ThemeProvider attribute={"class"}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
