"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Card = ({ image, title, detail, onClick }) => {
    return (
      <div className="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700 max-sm:w-[75%]">
        <a onClick={onClick} aria-modal={title} rel="nofollow">
          <Image
            className="rounded-t-lg"
            src={image}
            alt="..."
            width={900}
            height={650}
          />
        </a>
        <div className="p-5">
          <a onClick={onClick} aria-modal={title} rel="nofollow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white ">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400 truncate">{detail}</p>
          <a
            onClick={onClick}
            aria-modal={title}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            rel="nofollow"
          >
            Read more
            <svg
              aria-hidden="true"
              className="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    );
};

export default Card;
