"use client";

import Post from "./blog/post";
import { useState } from "react";

const items = [
  {
    id: "20",
    title: "Blog Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "12/5/2004",
    topic: "javascript",
  },
  {
    id: "5",
    title: "Blog Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "1/1/2024",
    topic: "html",
  },
  {
    id: "2",
    title: "Blog Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "1/1/2024",
    topic: "Tailwindcss",
  },
  {
    id: "3",
    title: "Blog Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "12/5/2004",
    topic: "javascript",
  },
];

export default function Blog() {
  const [selectedId, setSelectedId] = useState<string | number>(null);
  const [filterItem, setfilter] = useState(items);
  const topics = filterItem.map((item) => item.topic);

  const uniqueTopics = topics.filter(
    (item, index) => topics.indexOf(item) === index
  );

  function changeFilter(topic: string) {
    // if click again undo filter (Check all)
    if (topic === filterItem[0].topic && uniqueTopics.length == 1) {
      setfilter(items);
      return;
    }
    const filteredItems = items.filter((item) => item.topic === topic);
    setfilter(filteredItems);
  }

  return (
    <section className="px-4 py-8 flex w-screen bg-white dark:bg-slate-900 justify-center gap-6">
      <main className="max-sm:w-full">
        <h3 className="text-3xl font-extrabold dark:text-white mb-4">
          Latest Blog Post
        </h3>
        <div className="flex flex-col max-sm:items-center w-full gap-4">
          {filterItem.map((item) => (
            <Post
              key={item.id}
              post={item}
              setId={setSelectedId}
              selectedId={selectedId}
            />
          ))}
        </div>
      </main>
      <aside className="w-[30%] max-sm:hidden sticky top-2 h-fit">
        <h4 className="text-2xl font-bold dark:text-white">Categories</h4>
        <ul className="flex flex-wrap gap-2 mt-4">
          {uniqueTopics.map((topic, index) => (
            <li
              key={index}
              onClick={() => changeFilter(topic)}
              className="uppercase bg-indigo-800 rounded-xl py-1 px-2 text-xs text-white cursor-pointer"
            >
              {topic}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
