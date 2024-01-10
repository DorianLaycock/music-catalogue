"use client";

import {useState} from "react";

export default function Itemform({onSubmit}) {
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const item = {artist, album};
        onSubmit(item);

        setArtist("");
        setAlbum("");
    }

    return (
        <div className="mt-8 ml-8 w-64 rounded bg-slate-400">
            <h1 className="text-2xl pl-4 font-bold">Add an album</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <div className="pt-2 text-center">
                            <label htmlFor="name">Artist </label>
                            <input
                                className="text-black border border-black"
                                value={artist}
                                type="text"
                                id="artist"
                                onChange={(event) => setArtist(event.target.value)}
                            />
                        </div>
                        <div className="pt-2 text-center">
                            <label htmlFor = "quantity">Album </label>
                            <input
                                className="text-black border border-black"
                                value={album}
                                type="text"
                                id="album"
                                onChange={(event) => setAlbum(event.target.value)}
                            />
                            </div>
                    </div>
                    <div className="pt-2 text-center">
                        <button className=" cursor pointer border-2 rounded border-blue-500 bg-blue-500 w-32 mb-2 hover:bg-slate-400">Add </button>
                    </div>
                </form>
        </div>
    );

}