"use client";

import {useState} from "react";
import ItemList from "./itemlist.js";
import Itemform from "./itemform.js";
import Item from "./item.js";

const itemsData = [
  {artist: "Summoning", album: "Stronghold"},
  {artist: "Opeth", album: "Blackwater Park"},
  {artist: "Bathory", album: "Blood Fire Death"},
]

export default function Page() {
  
  const [items, setItems] = useState(itemsData);

  function handleSubmit(item) {
    setItems([...items, item]);
  }

  function handleDelete(item){
    setItems(items.filter((item) => item.artist !== artist));
  }

  return (
    <main class="flex flex-col justify-center items-center w-screen">
      <h1 class="text-4xl">Music Catalogue</h1>
      <p>Welcome to Music Catalogue v0.2</p>
      <p>This is a personal project I will be using to practice my web development skills.</p>
      <p>Soon the features will be added to save your list, and display album art.</p>
      <div class="flex flex-row">
        <div class="">
          <Itemform onSubmit={(item) => handleSubmit(item)} />
        </div>
        <div class="">
          <ItemList items={items}/>
        </div>
      </div>
    </main>
  )
}