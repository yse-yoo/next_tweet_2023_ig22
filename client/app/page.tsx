"use client"

export default function Home() {
  console.log('Home!!!!')
  return (
    <div>
      <textarea className="resize-none w-full h-24 border rounded-md p-2" placeholder="今なにしてる？"></textarea>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">Send</button>
    </div>
  )
}
