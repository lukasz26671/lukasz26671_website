"use client"
import Link from "next/link";
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
} from "@material-tailwind/react";
import Audioplayer from "./Audioplayer";

export function Navbar({ className }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    let menuState = menuOpen ? "right-0" : "right-[-100%]"
    return (
        <>
            {menuOpen ? <div style={{zIndex: 1}} onClick={()=> {setMenuOpen(false)}} className={menuOpen ? "fixed top-0 left-0 w-full min-h-screen bg-zinc-900/40" : ""}></div> : ""}
            <div className="fixed right-5 top-5" style={{zIndex: 1000}} onClick={toggleMenu}>
                {
                    (menuOpen ? <AiOutlineClose size={30} /> :<AiOutlineMenu size={30} />)
                }
                
            </div>
            <Card className={`m transition-all duration-300 select-none fixed top-0 ${menuState} h-screen w-full max-w-screen sm:max-w-[20rem] p-4 shadow-xl bg-transparent bg-gradient-to-b from-slate-700/90 via-slate-700/30 shadow-blue-gray-900/5 z-10 text-slate-50`}>
                <div className="flex justify-between mb-2 p-4">
                    <Typography variant="h5" color="white">
                        Menu
                    </Typography>
                </div>
                <List>
                    <Link href="/">
                        <ListItem className="hover:drop-shadow-glow-white text-center sm:text-left">
                            Strona główna
                        </ListItem>
                    </Link>
                    <Link href="/about">
                        <ListItem className="hover:drop-shadow-glow-white text-center sm:text-left">
                            Coś o mnie
                        </ListItem>
                    </Link>
                    <div className="separator border-slate-700/40"></div>
                    <Link href="/mods">
                        <ListItem className="hover:drop-shadow-glow-white text-center sm:text-left">
                            Mody
                        </ListItem>
                    </Link>
                    <div className="separator border-slate-700/40"></div>
                    <Link href="https://lukasz26671.github.io/Kalkulator">
                        <ListItem className="hover:drop-shadow-glow-white text-center sm:text-left">
                            Kalkulator
                        </ListItem>
                    </Link>
                    <div className="separator border-slate-700/40"></div>
                    <Link href="https://lukasz26671.github.io/contact">
                        <ListItem className="hover:drop-shadow-glow-white text-center sm:text-left">
                            Kontakt
                        </ListItem>
                    </Link>
                    <div className="separator border-slate-700/40"></div>
                    <Link href="https://lukasz26671.github.io/HackerTyper2">
                        <ListItem className="hover:drop-shadow-glow-white text-center sm:text-left">
                            Hacker Typer 2
                        </ListItem>
                    </Link>
                    <Link href="http://lukasz26671.ddns.net:7207">
                        <ListItem className="hover:drop-shadow-glow-white text-center sm:text-left">
                            Media Provider
                        </ListItem>
                    </Link>
                    <Audioplayer/>
                    <div className="separator border-slate-700/40"></div>
                </List>
            </Card>
        </>
    )
}

export default Navbar;