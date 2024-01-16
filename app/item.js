export default function Item({ artist, album, onDelete }) {

    function onMouseOver(){
        console.log(String(artist + " " + album));
      }

    return (
        <div>
            <h3 class="cursor-pointer font-bold text-xl hover:underline">{artist}</h3>
            <p onMouseOver={(onMouseOver)}>{album}</p>
            <p>
                <button class="cursor-pointer text-red-600" onClick={() => onDelete(album)}>Remove from list</button>
            </p>
        </div>
    );
}