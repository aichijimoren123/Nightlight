"use client";

import {
  Archive,
  ArchiveX,
  File,
  Gauge,
  Inbox,
  Send,
  Trash2,
  User2,
} from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/Button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Header from "./Header";

interface NavProps {
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}

const links: {
  title: string;
  label?: string;
  icon: any;
  variant: "default" | "ghost";
}[] = [
  {
    title: "Dashboard",
    label: "",
    icon: Gauge,
    variant: "default",
  },
  {
    title: "Users",
    label: "10",
    icon: User2,
    variant: "ghost",
  },
  {
    title: "Inbox",
    label: "128",
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

export function Nav({ defaultCollapsed, children }: NavProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout:mail=${JSON.stringify(
          sizes
        )}`;
      }}
      className="h-full items-stretch"
    >
      <ResizablePanel
        defaultSize={20}
        collapsedSize={4}
        collapsible={true}
        minSize={15}
        maxSize={20}
        onCollapse={() => {
          setIsCollapsed(true);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            true
          )}`;
        }}
        onResize={() => {
          setIsCollapsed(false);
          document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
            false
          )}`;
        }}
        className={cn(
          isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
        )}
      >
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
                      href="#"
                      className={cn(
                        buttonVariants({ variant: link.variant, size: "icon" }),
                        "h-9 w-9",
                        link.variant === "default" &&
                          "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                      )}
                    >
                      <link.icon className="h-4 w-4" />
                      <span className="sr-only">{link.title}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="flex items-center gap-4"
                  >
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
                  href="#"
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "sm" }),
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
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel minSize={50} maxSize={80}>
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-3">{children}</main>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
