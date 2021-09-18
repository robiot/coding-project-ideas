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
          
          <div className="bg-gray-400 rounded-md px-4 py-2 flex">
            { /* Votes */}

            <div className="text-gray-600 flex flex-col items-center w-min mr-5">
              <div className="text-xl">0</div>
              <div>Votes</div>
            </div>
            
            <div className="text-gray-600 flex flex-col items-center w-min">
              <div className="text-xl">1/5</div>
              <div>Difficulty</div>
            </div>

            { /* Difficulty */}

            { /* Name */}

            { /* Description */}

            { /* Tags */}

            { /* Author */}
          </div>
        </div>
			</div>
		</div>
	)
}