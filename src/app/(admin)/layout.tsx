import { ReactNode } from "react";
import SidebarMenu from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen  dark:bg-black">
      <SidebarMenu className="w-64 shadow-md" />
      <main className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-3">{children}</main>
      </main>
    </div>
  );
}
