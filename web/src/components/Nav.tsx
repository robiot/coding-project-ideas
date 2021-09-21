import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GreenButton } from "./GreenButton";

export default function Nav() {
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");
    useEffect(() => {
        setUsername(localStorage.getItem("user"));
        setToken(localStorage.getItem("token"));
    }, [])

    return (
        <div className="bg-gray-800 text-white">
            <div className="flex items-center container-lg mx-auto justify-between px-4 h-16">

                <Link href="/">
                    <a className="text-xl font-semibold">Coding Project Ideas</a>
                </Link>

                {/* todo: Fix refresh */}
                {token !== null && username !== null &&
                <div className="flex items-center float-right">
                    <div className="rounded-full h-10 w-10 bg-purple-600"></div>
                    <div className="ml-2 align-middle">{ username }</div>
                </div>
                }

                {token === null && username === null &&
                <div className="flex items-center float-right">
                    <GreenButton href="/login">Sign In</GreenButton>
                </div>
                }
            </div>
        </div>
    )
}