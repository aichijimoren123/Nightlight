"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { cn } from "@/lib/utils";
import { useState } from "react";
import Header from "./Header";
import { SiderNavigation } from "./SiderNavigation";

interface NavProps {
  defaultCollapsed?: boolean;
  children: React.ReactNode;
}

export function Layout({ defaultCollapsed, children }: NavProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  return (
    <ResizablePanelGroup
      direction="horizontal"
      onLayout={(sizes: number[]) => {
        console.log("resize", sizes);
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
        <SiderNavigation isCollapsed={isCollapsed} />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80} minSize={50} maxSize={80}>
        <div className="flex flex-col">
          <Header />
          <main className="flex-1 p-3">{children}</main>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
