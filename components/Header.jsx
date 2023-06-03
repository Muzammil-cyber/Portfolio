'use client'
import Image from "next/image"

export default function Header() {

    const links = [
        {
            name: 'Home',
            link: '#Home'
        },
        {
            name: 'Portfolio',
            link: '#Portfolio'
        },
        {
            name: 'About',
            link: '#About'
        },
    ]
    function handleClick() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('hidden');
    }



    return (
        <header className="bg-gray-800 sm:flex sm:justify-between sm:px-4 sm:py-3 sm:items-center flex-1">
            <div className="flex items-center justify-between px-4 py-3 sm:p-0">
                <div>
                    <Image className="h-8 w-auto" src="/logo.svg" alt="Workflow" width={100} height={100} />
                </div>
                <div className="sm:hidden">
                    <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none" onClick={handleClick}>
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path className="hidden" fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                            <path className="block" fillRule="evenodd" clipRule="evenodd" d="M6 5h12v2H6V5zm0 5h12v2H6v-2zm0 5h12v2H6v-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <nav className="px-2 pt-2 pb-4 sm:flex sm:p-0 hidden">
                {links.map((key, index) => <a key={index} href={key.link} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">{key.name}</a>)}

                {/* <a href={links.portfolio} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">Portfolio</a>
                <a href={links.portfolio} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700">Portfolio</a> */}
            </nav>
        </header>
    )
}