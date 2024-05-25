import Link from "next/link";

export default function Page() {
  
/*   const [items, setItems] = useState(itemsData);

  function handleSubmit(item) {
    setItems([...items, item]);
  }

  function handleDelete(album){
    setItems(items.filter((item) => item.album !== album));
  } */

  return (
    <main class="flex flex-col justify-center items-center w-screen">
      <h1 class="text-4xl">"I LISTEN TO EVERYTHING"</h1>
      <p>Let's put that to the test...</p>
      <div class="flex flex-row">
        <div class="pt-2 text-center m-2">
          <Link href="/" class="cursor pointer border-2 rounded border-blue-500 bg-blue-500 w-32 mb-2 hover:bg-black">Home</Link>
        </div>
        <div class="pt-2 text-center m-2">
          <Link href="/aboutPage" class="cursor pointer border-2 rounded border-blue-500 bg-blue-500 w-32 mb-2 hover:bg-black">About</Link>
        </div>
      </div>
      <div class="flex flex-row">
        {/* <div>
          <Itemform onSubmit={(item) => handleSubmit(item)} />
        </div>
        <div>
          <ItemList items={items} onDelete = {handleDelete}/>
        </div> */}
      </div>
    </main>
  )
}