import { ReactNode } from "react";
import { Layout } from "./components/Layout";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex dark:bg-black">
      <Layout>{children}</Layout>
    </div>
  );
}
