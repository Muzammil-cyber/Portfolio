'use client'
import { useState } from "react";
import Card from "./Card"
import Modal from "./Modal";

export default function Portfolio() {

    const [modal, setModal] = useState(null);

    const Cards = [
        {
            image: '/portfolio/work1.png',
            title: 'VBS - BAT',
            detail: 'A site with Harmful and Prank codes to have fun. Codes are based on VBScript and Batch',
            link: "https://vbs-bat.netlify.app"

        },
        {
            image: '/portfolio/work2.jpg',
            title: 'Vector Tracing',
            detail: 'Have the ablity to vectorize complex images to create SVG files'
        },
        {
            image: '/portfolio/work3.png',
            title: 'Muzammil\'s Newsletter',
            detail: 'A subcription for my Newsletter. Uses Bootstrap and MailChimp.\n Bootstrap: Used for Styling\n MailChimp: Used to store email',
            link: "https://muzammil-newsletter.herokuapp.com"
        },
        {
            image: '/portfolio/work4.png',
            title: 'TinDog',
            detail: 'A mockup site used to promote an Dog dating app. Uses Bootstrap for styling',
            link: "https://muzammil-cyber.github.io/TinDog/"
        },
        {
            image: '/portfolio/work5.png',
            title: 'Assistant',
            detail: 'A python based Assistant. It reacts to Voice Commands and uses different APIs to answer questions',
            link: "https://github.com/Muzammil-cyber/AI-Assistant"
        },
        {
            image: '/portfolio/work6.png',
            title: 'Justice League',
            detail: 'A python based Login App',
            link: "https://github.com/Muzammil-cyber/JusticeLeague"
        },
        {
            image: '/portfolio/work7.png',
            title: 'Keeper App',
            detail: 'A web app used to Keep track of user\'s Notes',
            link: "https://keeper-muzammil.vercel.app"
        },
        {
            image: '/portfolio/work8.png',
            title: 'Socius - Welcome',
            detail: 'An Anoucment site, that tell people about the new coming Web3 Site "Socius"',
            link: "https://socius-welcome.vercel.app"
        },
    ];

    function openModal(e) {
        setModal(e.target?.ariaModal)
    }
    function closeModal() {
        setModal(false)
    }


    return (
        <>
            <div className='flex-auto py-4' id="Portfolio">
                <div className='flex flex-col items-center justify-center leading-3'>
                    <h1 className='text-4xl font-bold text-slate-800'>Portfolio</h1>
                    <p className='text-xl font-normal text-slate-600'>Here are some of my works</p>
                </div>
                <div className='flex flex-col items-center justify-center mt-3'>
                    <div className='flex flex-row flex-wrap gap-4 justify-center'>
                        {Cards.map((card, index) => {
                            return (
                                <Card key={index} image={card.image} title={card.title} detail={card.detail} onClick={openModal} />
                            )
                        })}
                    </div>
                    {/* <div className="mt-5"><Card images={images} /></div> */}
                </div>
            </div>
            {Cards.map((card, index) => {
                return (
                    <Modal key={index} onClick={closeModal} isClose={modal == card.title ? true : false} detail={card.detail} title={card.title} link={card?.link} />
                )
            })}

        </>
    )
}