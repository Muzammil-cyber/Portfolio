"use client";

import age from "./intro/age";

export default function IntroClient() {
  return (
    <>
      <p className="text-secondary-800 dark:text-secondary-400">
        I&apos;m a {age()}-year-old{" "}
        <span className="text-bold">software engineer</span> with expertise in
        React Native, NextJS, and Node.js. I&apos;m passionate about building
        robust and scalable software solutions that enhance user experience.
      </p>
      <p className="text-secondary-600 dark:text-secondary-400">
        My software development journey began at the age of 19, and I&apos;ve
        since gained valuable experience working with diverse companies
        worldwide. 🌍
      </p>
      <p className="text-secondary-600 dark:text-secondary-400">
        Currently, I&apos;m seeking a challenging position to broaden my skill
        set and tackle new technical problems. I thrive in innovative
        environments and believe in collaborative problem-solving. &#x1F60E;
      </p>
    </>
  );
}
