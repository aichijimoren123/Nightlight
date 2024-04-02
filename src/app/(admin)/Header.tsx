import { cn } from "@/lib/utils";
import ThemeSwitcher from "../../components/ThemeSwitch";
import Link from "next/link";
import BreadcrumbComponent from "./Breadcrump";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn(className, "shadow-sm")}>
      <nav className="flex justify-between items-center py-4">
        <div className="flex-1 px-4">
          <BreadcrumbComponent />
        </div>
        <ThemeSwitcher />
        <div>
          <Link href="/auth" className="text-lg">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}
