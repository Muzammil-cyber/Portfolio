'use client'

import Image from "next/image"

export default function Cover() {
    return (
        <div className='flex-auto py-4 color-content' id="Home">
            <Image src='/profile-Cropped.jpg' className="rounded-full h-20 sm:h-28 w-auto m-auto" width={682} height={682} alt="It is a Me (Mario)" />
            <h1 className="name">Muzammil Loya</h1>
            <p className="role">Web Developer</p>
        </div>
    )

}