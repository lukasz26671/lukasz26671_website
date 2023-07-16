"use client"
import { useEffect, useState, createRef } from "react";
import { BsShuffle, BsShare, BsFillPlayFill, BsFillFastForwardFill, BsFillRewindFill, BsFillPauseFill } from "react-icons/bs";
import { MdLoop, MdFeaturedVideo } from "react-icons/md";
import { Select, Option } from "@material-tailwind/react";
import Link from "next/link";

export default function Audioplayer() {
    const icon_size = 24;
    const [playlist, setPlaylist] = useState({})
    const [shuffle, setShuffle] = useState(false);
    const [loop, setLoop] = useState(false);
    const [songId, setSongId] = useState(0);
    const [isFeatured, setIsFeatured] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [prevIdx, setPrevIdx] = useState(-1);

    const audioEl = createRef();
    const titleEl = createRef();

    function getRandomSongIdx(p = null) {
        let pl = null

        if(p == null)
            pl = playlist;

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        let mLength = Math.min(playlist?.IDs?.length, playlist?.authors?.length, playlist?.titles?.length)

        return getRandomInt(mLength)
    }

    useEffect(()=> {
        if (audioEl.current != null) {
            audioEl.current.volume = 0.3;
        }

        return () => {

        }

    }, [audioEl.current])
    
    useEffect(()=> {
        fetch(`http://lukasz266713.ddns.net:3300/api/readplaylist/${isFeatured ? "featured" : ""}`).then(s => s.json()).then(s => {
            let mLength = Math.min(s?.IDs?.length, s?.authors?.length, s?.titles?.length)
        
            let nobj = {IDs: s?.IDs?.slice(0, mLength), authors: s?.authors?.slice(0, mLength), titles: s?.titles?.slice(0, mLength)}

            setPlaylist(nobj);
        });
    }, [isFeatured]);

    
    useEffect(()=> {
        setSongId(getRandomSongIdx(playlist))
    }, [playlist])

    useEffect(()=> {
        if (audioEl.current != null) {
            let id = playlist?.IDs?.[songId];
            if (id != null) {
                audioEl.current.src = `http://lukasz266713.ddns.net:1234/stream_id/${playlist?.IDs?.[songId]}`;

                if(isPlaying) {
                    audioEl.current.play().catch(e => {
                        if(!e.toString().includes("play()"))
                            throw e;
                    });
                }

            }
        }
    }, [songId])


    function activeState(state) {
        return `transition-opacity ${state ? "opacity-100" : "opacity-30"}`
    }

    function share(e) {
        navigator.clipboard.writeText(`https://youtu.be/${playlist.IDs?.[songId]}`)

        let s_ico = document.getElementById("s_ico");

        if(s_ico != null) {
                s_ico.classList.add("opacity-100")
                s_ico.classList.remove("opacity-30")

            setTimeout(()=> {
                s_ico.classList.remove("opacity-100")
                s_ico.classList.add("opacity-30")
            }, 250)
        }
    }
    function changeVolume(e) {
        if(audioEl.current != null) {
            audioEl.current.volume = e.target.value/100;
        }
    }

    function toggleShuffle() {
        setShuffle(!shuffle);
    }
    function toggleLoop() {
        setLoop(!loop);
    }
    function handlePlaylistChange(evt) {
        setIsFeatured(evt === "featured")
    }
    function togglePlay() {
        setPlay(!isPlaying);
    }

    function setPlay(state, update=true) {
        if(state) {
            audioEl.current.play().catch(e => {
                if(!e.toString().includes("play()"))
                    throw e;
            });
        } else {
            audioEl?.current?.pause()
        }
        setIsPlaying(state)
    }

    function nextSong() {
        if (shuffle) {
            setSongId(getRandomSongIdx())
        } else {
            let mLength = Math.min(playlist?.IDs?.length, playlist?.authors?.length, playlist?.titles?.length)

            let idx = (songId + 1) % mLength;

            setPrevIdx(songId);
            setSongId(idx);
        }
    }
    function prevSong() {
        let mLength = Math.min(playlist?.IDs?.length, playlist?.authors?.length, playlist?.titles?.length)

        let idx = songId;
        if (prevIdx !== songId && prevIdx >= 0) {
            idx = prevIdx;

            setPrevIdx(-1);
            setSongId(prevIdx)
        } else {
            idx--;

            if (idx >= mLength) {
                idx = 0;
            } else if(idx < 0) {
                idx = mLength-1;
            } 

            setSongId(idx);
        }
    }

    return (
        <div id="audioPlayer" className="text-center pt-3 cursor-default">
            <Select name="playlistSelect" variant="outlined" defaultValue="default" onChange={handlePlaylistChange} label="Select playlist" id="playlistSelect">
                <Option className="text-black bg-transparent" value="default">Default</Option>
                <Option className="text-black bg-transparent" value="featured">Featured</Option>
            </Select>
            <div className="content unselectable mt-3 py-3" id="content">
                <p className="p-3 pb-6 h-20" id="song"><span>{isNaN(songId) ? "" : songId+1 + "."} </span>
                    <Link target="_blank" ref={titleEl} href={`https://youtube.com/watch?v=${playlist.IDs?.[songId]}`}>
                        {`${playlist.authors?.[songId]} - ${playlist.titles?.[songId]}`}
                    </Link>
                </p>
                <div className="controls">
                    <audio ref={audioEl} volume={0.4} onEnded={()=> {
                            if(!loop) {
                                nextSong()
                            } else {
                                if(audioEl.current != null) {
                                    audioEl.current.currentTime = 0;
                                    audioEl.current.play();
                                }
                            }
                        
                        }}></audio>
                    <div id="volumeContainer" className="mt-2">
                        <div id="volumebar flex flex-column content-center">
                            <input type="range" onChange={changeVolume} min="0" max="100" className="slider" id="volSlider" title="Volume: 50%" />
                        </div>
                    </div>
                    <div id="controlbuttons" className="flex justify-center gap-2 py-3">
                        <button id="vid">
                            <MdFeaturedVideo  size={icon_size} />
                        </button>
                        <button id="random" onClick={toggleShuffle}>
                            <BsShuffle  className={activeState(shuffle)} size={icon_size} />
                        </button>
                        <button id="prev" onClick={prevSong}>
                            <BsFillRewindFill size={icon_size} />
                        </button>
                        <button id="playpause" onClick={togglePlay}>
                            {isPlaying ? <BsFillPauseFill size={icon_size} />:<BsFillPlayFill size={icon_size} />}
                        </button>
                        <button id="next" onClick={nextSong}>
                            <BsFillFastForwardFill size={icon_size} />
                        </button>
                        <button id="loop" onClick={toggleLoop}>
                            <MdLoop className={activeState(loop)} size={icon_size} />
                        </button>
                        <button id="share"  onClick={share}>
                            <BsShare className="transition-opacity opacity-30" id="s_ico" size={icon_size - 1} />
                        </button>
                    </div>
                    <p id="audioSrcInfo" style={{ fontSize: "10px" }}>via Youtube</p>
                </div>
            </div>
        </div>
    );
}