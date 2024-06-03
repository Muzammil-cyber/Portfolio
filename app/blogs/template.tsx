export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full  h-fit dark:bg-slate-900 dark:text-white">
      {children}
    </section>
  );
}
