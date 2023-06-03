'use client'

import { useState, useRef } from "react";



function About() {

    const [btn, setBtn] = useState("Submit");
    const [isDisabled, setDisabled] = useState(false);
    const emailRef = useRef();
    const commentRef = useRef();

    async function handleSubmit(e) {

        console.log("called");
        setDisabled(true);
        e.preventDefault();
        const response = await fetch(
            `/api?email=${emailRef.current.value}&comment=${commentRef.current.value}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },

            }
        );
        const res = await response.json();
        console.log(res);
        if (res.status === "success") {
            setBtn("Submitted");
        }
    }

    return (<div className="flex-auto py-4 color-content flex flex-row flex-wrap gap-[6%] max-sm:flex-col  max-sm:gap-2">
        <div className="sm:w-[47%]">
            <h1 className="text-2xl font-semibold  text-white">About Us</h1>
            <p className=" text-gray-400 mt-4">Technology enthusiast and web developer. Passionate about coding and creating magical digital experiences. Let's create something awesome together!</p>
            <p className=" text-gray-400 mt-4">Web Developer and Coder. Passionate about creating beautiful and functional digital experiences with HTML/CSS, JavaScript, Node.js, Python, Bootstrap and jQuery frameworks. Making the web come alive one pixel at a time!</p>

        </div>
        <div className="sm:w-[47%]">
            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold  text-white">Contact Us</h1>
                <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium  text-white text-left">Your Email</label>
                <div className="relative mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5  text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </div>
                    <input ref={emailRef} type="text" id="input-group-1" className=" border  text-sm rounded-lg  block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="some@place.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium  text-white text-left">Your message</label>
                    <textarea ref={commentRef} id="message" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." required></textarea>
                </div>
                <div className="text-left mb-6">
                    <button
                        type="submit"
                        className={`left-0 focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5  focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600 disabled:bg-gray-900 disabled:cursor-not-allowed`}
                        disabled={isDisabled}
                    >{btn}
                    </button>
                </div>
            </form>
        </div>
    </div>)
}
export default About;