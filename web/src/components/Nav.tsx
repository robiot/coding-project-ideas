import React, { useEffect, useState } from "react";
import Link from "next/link";
import { GreenButton } from "./GreenButton";
import router from "next/router";

export default function Nav() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    function set() {
      setLoggedIn(localStorage.getItem("token") !== null && localStorage.getItem("user") !== null);
      setUsername(localStorage.getItem("user"));
    }; set();
    router.events.on("routeChangeStart", set);
  }, [router.events]);

  return (
    <div className="bg-gray-800 text-white">
      <div className="flex items-center container-lg mx-auto justify-between px-4 h-16">
        <Link href="/">
          <a className="text-xl font-semibold">Coding Project Ideas</a>
        </Link>

        <div className={
            !loggedIn ? "hidden" : ""
        }>
        <Link href="/logout">
          <div
            className="flex items-center float-right hover:bg-gray-700 rounded-md p-1 cursor-pointer"
            title="Logout"
          >
            <div className="rounded-full h-10 w-10 bg-purple-600"></div>
            <div className="ml-2 align-middle">{username}</div>
          </div>
        </Link>
        </div>



        <div className={
            loggedIn ? "hidden" : "flex items-center float-right"
        }>
            <GreenButton href="/login">Sign In</GreenButton>
        </div>

      </div>
    </div>
  );
}
