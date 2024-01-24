"use client";

import {useState} from "react";
import ItemList from "./itemlist.js";
import Itemform from "./itemform.js";
import InfoItem from "./infoItem.js";

const itemsData = [
  {artist: "Summoning", album: "Stronghold"},
  {artist: "Opeth", album: "Blackwater Park"},
  {artist: "Bathory", album: "Blood Fire Death"},
];

export default function Page() {
  
  const [items, setItems] = useState(itemsData);

  function handleSubmit(item) {
    setItems([...items, item]);
  }

  function handleDelete(album){
    setItems(items.filter((item) => item.album !== album));
  }

  return (
    <main class="flex flex-col justify-center items-center w-screen">
      <h1 class="text-4xl">Music Catalogue</h1>
      <p>Welcome to Music Catalogue v0.5</p>
      <p>This is a personal project I will be using to practice my web development skills.</p>
      <p>Soon the features will be added to save your list, and display album art.</p>
      <div class="flex flex-row">
        <div>
          <Itemform onSubmit={(item) => handleSubmit(item)} />
        </div>
        <div>
          <ItemList items={items} onDelete = {handleDelete}/>
        </div>
        <div class="border w-64 m-1">
          {/* Placeholder for album info */}
        </div>
      </div>
    </main>
  )
}