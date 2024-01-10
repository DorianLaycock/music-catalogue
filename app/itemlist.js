import Item from "./item.js";

export default function ItemList({ items }) {
    return (
        <div class="block ml-5 mt-6">
            <h1 class="text-2xl font-bold mb-5">Albums:</h1>
            {items.map((item) => (
                <div>
                    <Item artist={item.artist} album={item.album}/>
                </div>
            ))}
        </div>
    )
}