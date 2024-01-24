import { useState, useEffect } from "react";

const Item = ({ artist, album, onDelete }) => {
    const [albumInfo, setAlbumInfo] = useState(null);

    useEffect(() => {

        const apiKey = '49f75ad538e6137b8ef970367d3e8b8a';
        const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artist}&album=${album}&format=json`;
        

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

            // Handle the data, which contains album information including cover URLs
            
            const coverUrl = data.album.image[3]['#text'];
            const releaseDate = data.album.wiki ? data.album.wiki.published : null;
            setAlbumInfo({ artist, album, coverUrl });

            //Console log relevant for future use 

            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
      }, [artist, album]);


    return (
        <div className="flex flex-row m-1 w-64 rounded bg-slate-600">
            <div>
                {albumInfo && (
                    <img src={albumInfo.coverUrl} alt="Album Cover" class="object-contain h-20 w-20 m-2 rounded"/>
                )}
            </div>
            <div>
                <h3 class="cursor-pointer font-bold text-xl hover:underline">{artist}</h3>
                <p>{album}</p>
                <p>
                    <button class="cursor-pointer text-red-600" onClick={() => onDelete(album)}>Remove from list</button>
                </p>
            </div>
        </div>
    );
};

export default Item;