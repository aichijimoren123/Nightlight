import Header from "./Header";
import SidebarMenu from "./SidebarMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <SidebarMenu className="w-64 shadow-md" />
      <main className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-3">{children}</main>
      </main>
    </div>
  );
}
