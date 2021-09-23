import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
//import { Tag } from "../components/Tag";

async function fetchIdeas() {
  console.log("sus");
  const res = await fetch(
    "https://api.robiot.workers.dev/idea/list",
    {
      method: "GET",
    }
  );
  return await res.json()
}

export default function Home() {
  // const [ideas, setIdeas] = useState([]);
  // useEffect(() => {
  //   const ide = fetchIdeas();
  //   setIdeas(ide);
  // }, []);

  return (
    <div>
      <Head>
        <title>Coding Project Ideas</title>
        <meta name="description" content="Share your coding projects ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <div className="flex justify-end mb-4 text-white">
          <Button href="/new">New idea</Button>
        </div>

        { /* Item */}
        <Link href="/idea/1" passHref>
          <div className="bg-gray-800 hover:bg-hoverdark rounded-md px-4 py-2 flex cursor-pointer mb-3 transition duration-150 ease-in-out">
            <div className="hidden md:flex flex-col items-center w-min mr-5">
              <div className="text-xl">10k</div>
              <div className="text-gray-400">Votes</div>
            </div>

            <div className="hidden md:flex flex-col items-center w-min mr-10">
              <div className="text-xl">1/5</div>
              <div className="text-gray-400">Difficulty</div>
            </div>

            <div className="flex flex-col">
              <div className="text-2xl text-gray-100">Tic Tac Toe</div>
              <div className="text-lg text-gray-400">A simple tic tac toe game where you can play...</div>

              {/* <div className="flex flex-wrap gap-2">
                <Tag href="?tag=python">Python</Tag>
                <Tag href="?tag=easy">Easy</Tag>
                <Tag href="?tag=tutorial">Tutorial</Tag>
              </div> */}
            </div>
            
            {/* <div className="flex justify-end items-end h-full">
              robiot
            </div> */}

            { /* Author */}
          </div>
        </Link>
      </div>
    </div>
  )
}