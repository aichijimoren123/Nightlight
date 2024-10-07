import { ReactNode } from "react";
import { Nav } from "./components/Sidebar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen  dark:bg-black">
      <Nav>{children}</Nav>
    </div>
  );
}
