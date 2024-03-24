import { cn } from "@/lib/utils";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={cn(className, "shadow-sm")}>
      <nav className="flex justify-between items-center py-4">
        <div>
          <a href="/" className="text-2xl font-bold">
            Nightlight
          </a>
        </div>
        <div>
          <a href="/auth/login" className="text-lg">
            Login
          </a>
        </div>
      </nav>
    </header>
  );
}
