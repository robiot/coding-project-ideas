import React from "react";
import Link from "next/link";

export default function Nav() {
    return (
        <div className="bg-gray-700 text-white">
            <div className="flex items-center container-lg mx-auto justify-between px-4 h-16">

                <Link href="/">
                    Coding Project Ideas
                </Link>

                <div className="flex items-center float-right ">
                    <div className="rounded-full h-10 w-10 bg-purple-600"></div>
                    <div className="ml-2 align-middle">robiot</div>
                </div>
            </div>
        </div>
    )
}