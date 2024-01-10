export default function Item({ artist, album }) {
    return (
        <div>
            <h3 class="cursor-pointer font-bold text-xl hover:underline">{artist}</h3>
            <p>{album}</p>
        </div>
    );
}