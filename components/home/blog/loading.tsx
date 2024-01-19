export default function LoadingBlog() {
  return (
    <section className="px-4 py-8 flex w-full bg-white dark:bg-slate-900 justify-center gap-6">
      <main className="max-sm:w-full">
        <h3 className="text-3xl font-extrabold dark:text-white mb-4">
          Latest Blog Post
        </h3>
        <div className="flex flex-col max-sm:items-center w-full gap-4">
          <div className="max-w-lg bg-slate-300 dark:bg-slate-800 h-44 rounded-md animate-pulse"></div>
        </div>
      </main>
    </section>
  );
}
