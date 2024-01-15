"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function Post({
  id,
  title,
  desc,
  topic,
  date,
  setId,
  selectedId,
}: {
  id: string;
  title: string;
  desc: string;
  topic: string;
  date: string;
  setId: Dispatch<SetStateAction<string>>;
  selectedId: string;
}) {
  const dateCreated = useCallback(() => {
    //How long since created?
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
    const current = new Date();
    const created = new Date(date);
    const elapsed = current.getTime() - created.getTime();
    if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + " days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + " months ago";
    } else {
      return Math.round(elapsed / msPerYear) + " years ago";
    }
  }, [date]);

  const [dateState, setDate] = useState<string>(dateCreated);
  useEffect(() => {
    setTimeout(() => setDate(dateCreated), 60000);
  }, [dateCreated]);

  return (
    <>
      <motion.div
        layoutId={id}
        onClick={() => setId(id)}
        className="max-w-lg bg-slate-200 dark:bg-slate-800 rounded-md p-4 cursor-pointer"
      >
        <motion.h1 className="text-3xl font-extrabold dark:text-white">
          {title}
        </motion.h1>
        <motion.p className="truncate dark:text-slate-400 text-lg">
          {desc}
        </motion.p>
        <motion.div className="mt-4 flex justify-between items-center">
          <motion.p className="text-sm dark:text-slate-300">
            <motion.span className="bg-indigo-800 text-white uppercase py-1 px-2 rounded-xl">
              {topic}
            </motion.span>{" "}
            • {dateState}
          </motion.p>
          <motion.button
            onClick={() => setId(id)}
            className="inline-flex justify-center items-center py-1 px-2  font-medium text-center text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
          >
            Read More
            <PiReadCvLogoFill className="ml-2 text-2xl" />
          </motion.button>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {selectedId == id && (
          <motion.div className="fixed top-0 bottom-0 w-screen h-screen flex items-center justify-center p-4 cursor-not-allowed">
            <motion.div
              layoutId={selectedId}
              className="max-w-xl w-full bg-slate-200 dark:bg-slate-800 rounded-md p-4 cursor-default"
            >
              <motion.h1 className="text-3xl font-extrabold dark:text-white">
                {title}
              </motion.h1>
              <motion.p className="dark:text-slate-400 text-xl">
                {desc}
              </motion.p>
              <motion.p className="text-sm dark:text-slate-300 my-4">
                <motion.span className="bg-indigo-800 text-white uppercase py-1 px-2 rounded-xl">
                  {topic}
                </motion.span>{" "}
                • {dateState}
              </motion.p>
              <motion.button
                onClick={() => setId(null)}
                className="w-full py-1 px-2 mt-2 text-lg font-semibold text-slate-900 rounded-lg border border-slate-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
