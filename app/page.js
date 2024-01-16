"use client";

import {useEffect, useState} from "react";
import ItemList from "./itemlist.js";
import Itemform from "./itemform.js";
import Item from "./item.js";

const itemsData = [
  {artist: "Summoning", album: "Stronghold"},
  {artist: "Opeth", album: "Blackwater Park"},
  {artist: "Bathory", album: "Blood Fire Death"},
];

/* async fetchImage(){ 
  try {
    response = await fetch("");
    const data = await response.json();
    return data.message;
  } catch (error){
    console.error(error);
  }
} */ /* API, creates an error when not commented out... fix later */

export default function Page() {
  
  const [items, setItems] = useState(itemsData);
  const [image, setImage] = useState([]); /* API */

  async function loadImage(){ /* API */
    const images = await fetchImage();
    setAlbums(albums);
  }

  async function loadAlbums(){
    const albums = await fetchAlbums();
    setAlbums(albums);
  }

  useEffect(() => {
    loadAlbums();
  }, []);

  function onMouseOver(){
    console.log("it works!");
  }

  function handleSubmit(item) {
    setItems([...items, item]);
  }

  function handleDelete(album){
    setItems(items.filter((item) => item.album !== album));
  }

  return (
    <main class="flex flex-col justify-center items-center w-screen">
      <h1 class="text-4xl">Music Catalogue</h1>
      <p>Welcome to Music Catalogue v0.3</p>
      <p>This is a personal project I will be using to practice my web development skills.</p>
      <p>Soon the features will be added to save your list, and display album art.</p>
      <p onMouseOver = {(onMouseOver)}>Use this to test hover function.</p> {/* API related */}
      <div class="flex flex-row">
          <Itemform onSubmit={(item) => handleSubmit(item)} />
          <ItemList items={items} onDelete = {handleDelete}/>
      </div>
    </main>
  )
}