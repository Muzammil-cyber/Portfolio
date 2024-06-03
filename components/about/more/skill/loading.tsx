export function SkillLoading() {
  return (
    <article className="sm:w-1/2 text-left">
      <h2 className="text-3xl font-bold mb-3">Skills</h2>
      <p className="font-medium mb-6">
        All the technologies I feel comfortable with ⚙️
      </p>
      <ul className="flex flex-wrap gap-2 w-full">
        <li className="skill rounded-xl h-12 w-12 bg-secondary-300 dark:bg-secondary-500 animate-pulse relative flex items-center justify-center">
          <span className="sr-only">skill loading</span>
        </li>
        <li className="skill rounded-xl h-12 w-12 bg-secondary-300 dark:bg-secondary-500 animate-pulse relative flex items-center justify-center">
          <span className="sr-only">skill loading</span>
        </li>
        <li className="skill rounded-xl h-12 w-12 bg-secondary-300 dark:bg-secondary-500 animate-pulse relative flex items-center justify-center">
          <span className="sr-only">skill loading</span>
        </li>
      </ul>
    </article>
  );
}
