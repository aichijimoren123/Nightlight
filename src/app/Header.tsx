import { cn } from "@/src/lib/utils";
import ThemeSwitcher from "./ThemeSwitch";
import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn(className, "shadow-sm")}>
      <nav className="flex justify-between items-center py-4">
        <div className="flex-1">
          <Link href="/" className="text-2xl font-bold">
            Nightlight
          </Link>
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
