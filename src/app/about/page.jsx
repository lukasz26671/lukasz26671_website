import SvgDownArrow from '../../../public/down-arrow.svg.js'


export default function About() {
    return (
    <>
        <main className="flex min-h-screen flex-col items-center justify-between min-w-100">
            <div className={`flex  bg-gradient-to-b from-slate-700 to-slate-900 w-full flex-col items-center justify-center place-content-center min-w-full min-h-screen  xl:h-full text-white relative`} >
                <h3 className="text-2xl sm:text-3xl sm:p-2 sm:px-8 border-b uppercase font-bold mb-2 tracking-widest">Coś o mnie!</h3>

                <a href="#first" className="transition transform ease-in-out flex group scroller absolute bottom-[10%] md:bottom-8  cursor-pointer text-center flex-col place-content-center align-items-center">
                    <span className="delay-0 duration-300 group-hover:-translate-y-1 mb-2 px-1">Przejdź dalej!</span>
                    <div className="animate-bounce">
                        <SvgDownArrow className="relative left-1/2 -translate-x-1/2" width="20" height="20" fill="#fff" />
                    </div>
                </a>
            </div>
        </main>
        <section id="first" className="w-screen min-h-screen p-1 sm:p-4 bg-zinc-800">
                <h4 className='text-center text-4xl mt-10'>Basic info</h4>
                <div className="text-center separator relative my-3 w-1/3 left-1/2 -translate-x-1/2"></div>
                <p className="text-center">JESZCZE TU NIC NIE MA XD</p>
                <article className="flex items-center justify-center px-0 sm:px-2 md:px-20">
                    
                </article>
            </section>
    </>);
}

