'use client'

function About(params) {
    return (<div className="flex-auto py-4 color-content flex flex-row flex-wrap gap-[6%] max-sm:flex-col max-sm:items-center max-sm:gap-2">
        <div className="sm:w-[47%]">
            <h1 className="text-2xl font-semibold  text-white">About Us</h1>
            <p className=" text-gray-400 mt-4">Technology enthusiast and web developer. Passionate about coding and creating magical digital experiences. Let's create something awesome together!</p>
            <p className=" text-gray-400 mt-4">Web Developer and Coder. Passionate about creating beautiful and functional digital experiences with HTML/CSS, JavaScript, Node.js, Python, Bootstrap and jQuery frameworks. Making the web come alive one pixel at a time!</p>

        </div>
        <div className="sm:w-[47%]">
            <h1 className="text-2xl font-semibold  text-white">Contact Us</h1>
            <label for="input-group-1" class="block mb-2 text-sm font-medium  text-white text-left">Your Email</label>
            <div class="relative mb-6">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5  text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                </div>
                <input type="text" id="input-group-1" class=" border  text-sm rounded-lg  block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@flowbite.com" />
            </div>
            <label for="message" class="block mb-2 text-sm font-medium  text-white text-left">Your message</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm  rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
        </div>
    </div>)
}
export default About;