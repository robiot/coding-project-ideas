import React from "react";
import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coding Project Ideas</title>
        <meta name="description" content="Share your coding projects ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container-md mx-auto">
        <div className="mt-36 mx-2">
          <div className="flex justify-end mb-5 text-white">
            <Link href="/new">
              <div className="py-2 px-5 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer">New idea</div>
            </Link>
          </div>

          <div className="bg-gray-800 hover:bg-gray-700 rounded-md px-4 py-2 flex cursor-pointer">
            <div className="flex flex-col items-center w-min mr-5">
              <div className="text-xl">10k</div>
              <div className="text-gray-400">Votes</div>
            </div>

            <div className="flex flex-col items-center w-min mr-10">
              <div className="text-xl">1/5</div>
              <div className="text-gray-400">Difficulty</div>
            </div>

            <div className="flex flex-col">
              <div className="text-2xl text-gray-100">Tic Tac Toe</div>
              <div className="text-lg text-gray-400">A simple tic tac toe game where you can play...</div>
              <div className="bg-blue-300 rounded-md">Python</div>
            </div>

            { /* Tags */}

            { /* Author */}
          </div>
        </div>
      </div>
    </div>
  )
}