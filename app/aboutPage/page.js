import Link from "next/link";

export default function Page() {
  
  return (
    <main class="flex flex-col justify-center items-center w-screen">
      <h1 class="text-4xl">Music Catalogue</h1>
      <div class="flex flex-row">
        <div class="pt-2 text-center m-2">
          <Link href="/" class="cursor pointer border-2 rounded border-blue-500 bg-blue-500 w-32 mb-2 hover:bg-black">Home</Link>
        </div>
        <div class="pt-2 text-center m-2">
          <Link href="/aboutPage" class="cursor pointer border-2 rounded border-blue-500 bg-blue-500 w-32 mb-2 hover:bg-black">About</Link>
        </div>
      </div>
      <p>Welcome to Music Catalogue v0.5</p>
      <p>This is a personal project I will be using to practice my web development skills.</p>
      <p>Soon the features will be added to create an account and save your list.</p>
    </main>
  )
}