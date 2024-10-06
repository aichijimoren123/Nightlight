import { cn } from "@/lib/utils";
import ThemeSwitcher from "../../components/ThemeSwitch";
import Link from "next/link";
import BreadcrumbComponent from "./components/Breadcrump";
import TeamSwitcher from "./components/TeamSwitch";
import { MainNav } from "./components/MainNav";
import { Search } from "./components/Search";
import { UserNav } from "./components/UserNav";

export default function Header({ className }: { className?: string }) {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
