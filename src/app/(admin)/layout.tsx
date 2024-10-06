"use client";

import { ReactNode } from "react";
import Header from "./Header";
import { Nav } from "./Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen  dark:bg-black">
      <Nav />
      <main className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-3">{children}</main>
      </main>
    </div>
  );
}
