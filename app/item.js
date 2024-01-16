export default function Item({ artist, album, onDelete }) {

    return (
        <div>
            <h3 class="cursor-pointer font-bold text-xl hover:underline">{artist}</h3>
            <p onMouseOver={(onMouseOver)}>{album}</p>
            <p>
                <button class="cursor-pointer text-red-600" onClick={() => onDelete(album)}>Remove from list</button>
            </p>
        </div>
    );

    function onMouseOver(){
        //console.log(String(artist + " " + album));

        const apiKey = '49f75ad538e6137b8ef970367d3e8b8a';
        const apiUrl = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${apiKey}&artist=${artist}&album=${album}&format=json`;
        

        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        // Handle the data, which contains album information including cover URLs
        console.log(data);
        })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
      }

}