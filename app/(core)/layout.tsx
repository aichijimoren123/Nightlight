export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="shadow-sm">
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
      <main className="flex-1 flex">
        <aside className="w-1/4 shadow-md">sidebar</aside>
        <main className="flex-1 p-3">{children}</main>
      </main>
    </div>
  );
}
