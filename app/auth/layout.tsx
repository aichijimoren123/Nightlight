export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 max-lg:hidden">
        <h1 className="text-9xl font-bold ">Welcome!</h1>
        <h2 className="text-8xl font-semibold">Hear is your personal field</h2>
      </div>
      <div className="flex-1 flex justify-center items-center">{children}</div>
    </div>
  );
}
