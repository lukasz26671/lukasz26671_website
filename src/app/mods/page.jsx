"use client"
import SvgDownArrow from '../../../public/down-arrow.svg.js'
import Link from 'next/link.js'
import { Button } from '@material-tailwind/react'
import Image from 'next/image.js'

export default function Mods() {
    return (
        <>
            <main className="flex bg-gradient-to-br from-[#010a12] to-black min-h-screen flex-col items-center justify-between min-w-100" style={{zIndex: -2}}>
                <div className={`flex w-full flex-col items-center justify-center place-content-center min-w-full min-h-screen  xl:h-full text-white relative`} style={{zIndex: 0}} >
                    <h3 className="text-2xl sm:text-3xl sm:p-2 sm:px-8 border-b uppercase font-bold mb-2 tracking-widest">Mody</h3>

                    <a href="#first" className="transition transform ease-in-out flex group scroller absolute bottom-[10%] md:bottom-1/3  cursor-pointer text-center flex-col place-content-center align-items-center">
                        <span className="delay-0 duration-300 group-hover:-translate-y-1 mb-2 px-1">Przejdź dalej!</span>
                        <div className="animate-bounce">
                            <SvgDownArrow className="relative left-1/2 -translate-x-1/2" width="20" height="20" fill="#fff" />
                        </div>
                    </a>
                </div>
            </main>
            <section id="first" className="w-screen min-h-screen p-1 sm:p-4 bg-zinc-800">
                <h4 className='text-center text-4xl mt-10'>Mody!</h4>
                <div className="text-center separator relative my-3 w-1/3 left-1/2 -translate-x-1/2"></div>
                <p className="text-center">Nie ma ich wiele, bo w sumie tylko jeden, ale to żaden problem</p>
                <article className="flex items-center justify-center px-0 sm:px-2 md:px-20">
                    <div className="relative grid grid-cols-1 auto-rows-max w-2/3 self-center text-center md:text-left my-10">
                        <div className="relative col-auto grid-item h-96 md:h-96 lg:h-72 w-full align-center p-3 bg-zinc-900/30 rounded-xl">
                            <h5 className="text-lime-400 drop-shadow-glow-lime uppercase text-lg mb-2 text-md sm:text-xl md:text-2xl">Lukasz26671Utils Mod</h5>
                            <div className="separator border-lime-400 mb-2"></div>
                            <p className="text-lime-100 sm:p-3 whitespace-break-spaces text-md md:text-sm relative">
                                Mod zrobiony w sumie tylko po to, żeby poduczyć się Javy i tego, jak działa forge w minecrafcie :D 
                                <br/>
                                W żadnym wypadku nie jest ani zbalansowany, ani overpowered, ale nie był robiony z myślą o integracji z innymi modami.
                            </p>
                            <span className='font-bold'>Wersja: 1.7.10</span>
                            <Link href="https://github.com/lukasz26671/Lukasz26671Utils/releases" className="absolute bottom-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-5 lg:left-5" target='_blank'>
                                <Button color="green" className="text-lg sm:text-sm">Link do projektu</Button>
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}