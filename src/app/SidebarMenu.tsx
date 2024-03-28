import { cn } from "@/src/lib/utils";
import Link from "next/link";

const links = [
  { href: "/users", label: "Users" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/settings", label: "Settings" },
  { href: "/payments", label: "Payments" },
];

export default function SidebarMenu({ className }: { className: string }) {
  return (
    <aside className={cn(className, "flex flex-col p-2 gap-2")}>
      {links.map((link) => (
        <div key={link.href} className=" border-[1px] p-3 rounded-md">
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        </div>
      ))}
    </aside>
  );
}
