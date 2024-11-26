export default function Wrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto md:w-4/5 lg:w-2/5 md:px-0 w-full px-10 py-4">
      {children}
    </div>
  );
}
