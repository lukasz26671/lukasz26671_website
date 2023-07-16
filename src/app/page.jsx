"use client"

import Image from 'next/image'
import SvgDownArrow from '../../public/down-arrow.svg.js'
import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx"
import { useState, useRef, createRef, useEffect } from 'react'
import { Button } from "@material-tailwind/react";
import Link from 'next/link.js'
import { Alert } from "@material-tailwind/react";
import { useCookies } from 'react-cookie'

export default function Home() {
  let videobg = createRef();

  function showBg() {
    if(videobg.current != null) {
      videobg.current.classList.remove("opacity-0")
      videobg.current.classList.add("animate-in", "fade-in")
    }
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between min-w-100 bg-gradient-170 from-[#00628d] via-[#002a53] to-[#001d4c]" style={{zIndex: -2}}>
        {/* <nav className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <h2 className="fixed left-0 top-0 flex w-full justify-start border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-bold text-xl">
          Lukasz26671
        </h2>
      </nav> */}
        <div className={`flex w-full flex-col items-center justify-center place-content-center min-w-full min-h-screen z-1 xl:h-full text-white relative`} style={{zIndex: 0}} >
        <div className="bg-video opacity-0" ref={videobg} id="video" style={{zIndex: -1}}>
          <video className="bg-video__content" autoPlay muted loop onPlaying={showBg} onLoadedData={showBg} src="/background.webm"></video>
        </div>
          <h3 className="text-2xl sm:text-3xl sm:p-2 sm:px-8 border-b uppercase font-bold mb-2 tracking-widest">Lukasz26671</h3>
          <p className='w-80 text-center px-0 py-4 text-xl'>Witaj na mojej stronie!</p>
          <div className="border-t w-5/6 sm-w-2/3 lg:w-3/4 xl:w-1/3 border-collapse mt-6 sm:mt-3 mb-2"></div>

          <a href="#first" className="transition transform ease-in-out flex group scroller absolute bottom-[10%] md:bottom-8  cursor-pointer text-center flex-col place-content-center align-items-center">
            <span className="delay-0 duration-300 group-hover:-translate-y-1 mb-2 px-1">Przejdź dalej!</span>
            <div className="animate-bounce">
              <SvgDownArrow className="relative left-1/2 -translate-x-1/2" width="20" height="20" fill="#fff" />
            </div>
          </a>
        </div>
        <section id="first" className="w-screen min-h-screen p-1 sm:p-4 bg-zinc-800">
          <h4 className='text-center text-4xl mt-10'>Projekty!</h4>
          <div className="text-center separator relative my-3 w-1/3 left-1/2 -translate-x-1/2"></div>
          <p className="text-center">Nie są to oczywiście moje wszystkie projekty, natomiast są to jedne z ważniejszych, które zrobiłem :D</p>
          <article className="px-0 sm:px-2 md:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 auto-rows-max max-w-full text-center md:text-left my-10">
              <div className="relative col-auto grid-item h-96 md:h-96 lg:h-72 w-full p-3 bg-zinc-900/10">
                <h5 className="text-red-500 drop-shadow-glow-red uppercase text-lg mb-2 text-md sm:text-xl md:text-2xl">Youtube Audio Provider</h5>
                <div className="separator border-red-500 mb-2"></div>
                <p className="relative text-red-200 sm:p-3 whitespace-break-spaces text-md md:text-sm">
                  Dzięki niemu możesz teraz słuchać muzyki na tej stronie, sam(a) sprawdź :D
                  <br/>
                  <br/>
                  Kliknij w "menu" w prawym górnym rogu i wypróbuj sam(a)!
                  <br/>
                </p>
                <span className="font-bold text-xs">Aktualna wersja providera została przebudowana używając <a href="https://www.rust-lang.org/" className="text-[#c14a09] border-transparent border-b hover:border-[#c14a09]">Rust'a</a></span>
                <Link href="https://github.com/lukasz26671/r_webaudioprov" className="absolute bottom-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-5 lg:left-5" target='_blank'>
                  <Button color="red" className="text-lg sm:text-sm">Link do projektu</Button>
                </Link>
              </div>
              <div className="relative col-auto grid-item h-96 md:h-96 lg:h-72 w-full align-center p-3 bg-zinc-900/20">
                <h5 className="text-lime-400 drop-shadow-glow-lime uppercase text-lg mb-2 text-md sm:text-xl md:text-2xl">Google Sheets Playlist Reader</h5>
                <div className="separator border-lime-400 mb-2"></div>
                <p className="text-lime-100 sm:p-3 whitespace-break-spaces text-md md:text-sm relative">
                  Dzięki niemu możesz teraz słuchać muzyki na tej stronie, sam(a) sprawdź :D
                </p>
                
                <Link href="https://github.com/lukasz26671/webSrcProvider" className="absolute bottom-2 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:bottom-5 lg:left-5" target='_blank'>
                  <Button color="green" className="text-lg sm:text-sm">Link do projektu</Button>
                </Link>
              </div>
              <div className="relative col-auto grid-item h-96 lg:h-72 w-full p-3 bg-zinc-900/30">
                <h5 className="text-cyan-500 drop-shadow-glow-cyan uppercase text-lg mb-2 text-md sm:text-xl md:text-2xl">HackerTyper 2</h5>
                <div className="separator border-cyan-500 mb-2"></div>
                <p className="relative text-cyan-100 sm:p-3 whitespace-break-spaces text-md md:text-sm">
                  Symulator hackera / programisty :D Wystarczy że powciskasz randomowe klawisze, a kod będzie pisał się sam!
                  <br/><br/>
                  UWAGA: NIEDOSTĘPNY NA URZĄDZENIACH MOBILNYCH TJ. SMARTFONACH, TABLETACH
                  <br/><br/>
                  </p>
                  <div className="absolute flex flex-col md:flex-row gap-2 justify-center md:justify-around lg:justify-start bottom-2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:bottom-5 sm:left-5 w-[90%]">
                    <Link href="https://github.com/lukasz26671/HackerTyper2" target='_blank'>
                      <Button color="blue" className="text-lg sm:text-xs">Link do projektu</Button>
                    </Link>
                    <Link href="https://lukasz26671.github.io/HackerTyper2" className='ml-2'  target='_blank'>
                      <Button color="blue" className="text-lg sm:text-xs">Live demo</Button>
                    </Link>
                  </div>
                  
              </div>
              <div className="relative col-auto grid-item h-96 lg:h-72 w-full p-3 bg-zinc-900/40">
                <h5 className="text-yellow-400 drop-shadow-glow-amber uppercase text-lg mb-2 text-md sm:text-xl md:text-2xl">Oryginalna strona</h5>
                <div className="separator border-yellow-500 mb-2"></div>
                <p className="relative text-yellow-200 sm: p-3 whitespace-break-spaces text-md md:text-sm">
                  Miejsce, gdzie to wszystko się zaczęło :D
                  <br /><br />
                  Zobacz sam(a)!
                  <br/><br/><br/>  
                  </p>
                  <div className="absolute flex flex-col md:flex-row gap-2 justify-center md:justify-around lg:justify-start bottom-2 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:bottom-5 sm:left-5 w-[90%]">
                    <Link href="https://github.com/lukasz26671/lukasz26671.github.io"  target='_blank'>
                      <Button color="amber" className="text-lg sm:text-xs">Link do projektu</Button>
                    </Link>
                    <Link href="https://lukasz26671.github.io" className='ml-2'  target='_blank'>
                      <Button color="amber" className="text-lg sm:text-xs">Live demo</Button>
                    </Link>
                  </div>
              </div>
              <div className="relative grid-item h-52 w-full p-3 col-span-1 sm:col-span-2 text-center bg-zinc-900/60">
                <h5 className="text-violet-500 drop-shadow-glow-violet uppercase text-lg mb-2 text-md sm:text-xl md:text-2xl">Audio Player</h5>
                <div className="separator border-violet-500 mb-2"></div>
                <p className="relative text-violet-200 sm:p-3 whitespace-break-spaces text-md md:text-sm">
                  Oparty na swych trzech, już w sumie poprzednikach, jego początki sięgają 2015 roku, pozwala Ci słuchać muzyki, którą sam dla Ciebie przygotowałem!
                  <br/>
                  Znajduje się w menu ;)
                  <br/><br/>  
                  </p>
              </div>
            </div>
          </article>
        </section>
      </main>
      {/* <Fragment>
        <Alert variant="outlined" color="amber" className="fixed left-0 bottom-0 text-center" open={cookies.dismissed === "true"} onClose={(e) => {
            setCookie("dismissed", true)
            console.log(e.target)
            e.target.parentNode.classList.add("hidden")
          }}>
          Ta strona używa plików cookies. Pozostając na stronie, zgadzasz się na ich wykorzysytwanie.
        </Alert>
      </Fragment> */}

    </>
  )
}
