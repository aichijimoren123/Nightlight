import { buttonVariants } from "@/components/ui/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import {
  Archive,
  ArchiveX,
  File,
  Gauge,
  Inbox,
  Send,
  Settings2,
  Trash2,
  User2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SiderNavigationProps {
  isCollapsed?: boolean;
}

const links: {
  title: string;
  label?: string;
  href?: string;
  icon: any;
  variant: "default" | "ghost";
}[] = [
  {
    title: "Dashboard",
    label: "",
    href: "/dashboard",
    icon: Gauge,
    variant: "default",
  },
  {
    title: "Users",
    label: "10",
    href: "/users",
    icon: User2,
    variant: "ghost",
  },
  {
    title: "Settings",
    label: "5",
    href: "/settings",
    icon: Settings2,
    variant: "ghost",
  },
  {
    title: "Inbox",
    label: "128",
    href: "/inbox",
    icon: Inbox,
    variant: "ghost",
  },
  {
    title: "Drafts",
    label: "9",
    icon: File,
    variant: "ghost",
  },
  {
    title: "Sent",
    label: "",
    icon: Send,
    variant: "ghost",
  },
  {
    title: "Junk",
    label: "23",
    icon: ArchiveX,
    variant: "ghost",
  },
  {
    title: "Trash",
    label: "",
    icon: Trash2,
    variant: "ghost",
  },
  {
    title: "Archive",
    label: "",
    icon: Archive,
    variant: "ghost",
  },
];

export function SiderNavigation({ isCollapsed }: SiderNavigationProps) {
  return (
    <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2 min-w-[200px] transition-all duration-300 ease-in-out "
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href ?? "#"}
                  className={cn(
                    buttonVariants({
                      variant:
                        usePathname() === link.href ? "default" : "ghost",
                      size: "icon",
                    }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.href ?? "#"}
              className={cn(
                buttonVariants({
                  variant: usePathname() === link.href ? "default" : "ghost",
                  size: "sm",
                }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
