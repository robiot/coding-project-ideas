import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
//import { Tag } from "../components/Tag";

function truncate(input, input_length) {
  if (input.length > input_length) {
    return input.substring(0, input_length) + "...";
  }
  return input;
}

export default function Home() {
  const [ideas, setIdeas] = useState(Array);
  const [loading, setLoading] = useState(true);

  // interface idea_value_i {
  //   title: String;
  //   description: String;
  //   difficulty: String;
  //   author: String;
  //   voters: String[];
  // };

  type idea_t = {
    name: string;
    value: string;
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://api.robiot.workers.dev/idea/list", {
        method: "GET",
      });
      setIdeas(await res.json());
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>Coding Project Ideas</title>
        <meta name="description" content="Share your coding projects ideas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="flex justify-between mb-4 text-white">
          <div>
            <PulseLoader color="#FFFFFF" loading={loading} size={10} />
          </div>
          <Button href="/new">New idea</Button>
        </div>

        {/* Item */}
        {ideas.map((idea: idea_t) => (
          <Link href={`/idea/${idea.name}`} key={idea.name} passHref>
            <div className="bg-gray-800 hover:bg-hoverdark rounded-md px-4 py-2 flex cursor-pointer mb-3 transition duration-150 ease-in-out">
              <div className="hidden md:flex flex-col items-center w-min mr-5">
                <div className="text-xl">
                  {JSON.parse(idea.value).voters.length}
                </div>
                <div className="text-gray-400">Votes</div>
              </div>

              <div className="hidden md:flex flex-col items-center w-min mr-10">
                <div className="text-xl">
                  {JSON.parse(idea.value).difficulty}/5
                </div>
                <div className="text-gray-400">Difficulty</div>
              </div>

              <div className="flex flex-col">
                <div className="text-2xl text-gray-100">
                  {JSON.parse(idea.value).title}
                </div>
                <div className="text-lg text-gray-400">
                  {truncate(JSON.parse(idea.value).description, 36)}
                </div>

                {/* <div className="flex flex-wrap gap-2">
                <Tag href="?tag=python">Python</Tag>
                <Tag href="?tag=easy">Easy</Tag>
                <Tag href="?tag=tutorial">Tutorial</Tag>
              </div> */}
              </div>

              {/* <div className="flex justify-end items-end h-full">
              robiot
            </div> */}

              {/* Author */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
