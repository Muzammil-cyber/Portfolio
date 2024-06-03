export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full  h-fit dark:bg-secondary-900 dark:text-white">
      {children}
    </section>
  );
}
