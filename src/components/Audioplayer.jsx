"use client"
import { useEffect, useState, createRef } from "react";
import { BsShuffle, BsShare, BsFillPlayFill, BsFillFastForwardFill, BsFillRewindFill, BsFillPauseFill } from "react-icons/bs";
import { MdLoop, MdFeaturedVideo } from "react-icons/md";
import { Select, Option } from "@material-tailwind/react";
import Link from "next/link";

export default function Audioplayer() {
    const BASE_URL = "http://lukasz26671.ddns.net:7207";

    const icon_size = 24;
    const [playlist, setPlaylist] = useState([])
    const [shuffle, setShuffle] = useState(false);
    const [loop, setLoop] = useState(false);
    const [songId, setSongId] = useState(0);
    const [playlists, setPlaylists] = useState([]);
    const [playlistId, setPlaylistId] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [prevIdx, setPrevIdx] = useState(-1);

    const [playlistRetries, setPlaylistRetires] = useState(0);
    const [audioRetries, setAudioRetires] = useState(0);

    const audioEl = createRef();
    const titleEl = createRef();

    const maxLengthSongs = 200;

    function getRandomSongIdx(p = null) {
        let pl = null

        if(p == null)
            pl = playlist;

        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        return getRandomInt(playlist?.length ?? 0)
    }

    useEffect(()=> {
        if(playlistRetries < 5) {
            setTimeout(()=> {
                fetch(`${BASE_URL}/api/playlist/list`, {
                    method: "POST",
                    redirect: "follow",
                    referrerPolicy: "no-referrer",
                }).then(res => res.json()).then(pl => {
                    console.log(pl)
                    setPlaylists(pl);
                }).catch(e => {
                    setPlaylistRetires(playlistRetries + 1); 
                });
            }, ((playlistRetries+1) * (playlistRetries+1) * 1000))
        } else if(playlistRetries == 6){
            alert("Audio player is unavailable.")
            setPlaylistRetires(playlistRetries + 1)
        }
    }, [playlistRetries])
    

    useEffect(()=> {
        if(playlists[playlistId] == null)
            return;

        fetch(`${BASE_URL}/api/playlist/GetPlaylist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;v=1"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify({
                "SheetName": playlists[playlistId],
                "Ranges": [`C3:C${maxLengthSongs}`,`D3:D${maxLengthSongs}`,`E3:E${maxLengthSongs}`]
            })
        }).then(s => s.json()).then(s => {
            setPlaylist(s);
        });
    }, [playlists, playlistId]);

    
    useEffect(()=> {
        if(playlist != null)
            setSongId(getRandomSongIdx(playlist))

    }, [playlist])

    useEffect(()=> {
        if (audioEl.current != null) {
            let id = playlist?.[songId]?.youtubeID;
            if (id != null) {
                audioEl.current.pause();
                audioEl.current.src = `${BASE_URL}/Stream/Audio/${playlist?.[songId]?.youtubeID}`;

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
        navigator.clipboard.writeText(`https://youtu.be/${playlist?.[songId]?.youtubeID}`)

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
        const p = isPlaying;
        audioEl.current.pause();
        setPlaylistId(evt)
        if(p) {
            setIsPlaying(true)
        }
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
            let l = playlist?.length ?? 0;
            let idx = (songId + 1) % l;

            setPrevIdx(songId);
            setSongId(idx);
        }
    }
    function prevSong() {
        let l = playlist?.length ?? 0;

        let idx = songId;
        if (prevIdx !== songId && prevIdx >= 0) {
            idx = prevIdx;

            setPrevIdx(-1);
            setSongId(prevIdx)
        } else {
            idx--;

            if (idx >= l) {
                idx = 0;
            } else if(idx < 0) {
                idx = l-1;
            } 

            setSongId(idx);
        }
    }

    return (
        <div id="audioPlayer" className="text-center pt-3 cursor-default">
            <Select name="playlistSelect" variant="outlined" defaultValue="default" onChange={handlePlaylistChange} label="Select playlist" id="playlistSelect">
                { playlists?.map((_playlist, i)=> {
                        return <Option key={i} className="text-black bg-transparent" value={`${i}`}>{_playlist}</Option>
                    })
                }
            </Select>
            <div className="content unselectable mt-3 py-3" id="content">
                <p className="p-3 pb-6 h-20" id="song"><span>{isNaN(songId) ? "" : songId+1 + "."} </span>
                    <Link target="_blank" ref={titleEl} href={`https://youtube.com/watch?v=${playlist?.[songId]?.youtubeID}`}>
                        { playlist?.[songId] != null ? `${playlist?.[songId]?.author} - ${playlist?.[songId]?.title}` : ""}
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