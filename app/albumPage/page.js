"use client";

import {useState} from "react";
import ItemList from "./itemlist.js";
import Itemform from "./itemform.js";

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
    </main>
  )
}