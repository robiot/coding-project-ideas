import React from "react";
import Link from "next/link";

export function Nav( {children}) {
    return (
        <Link href="/new">
            <div className="py-2 px-5 rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer">New idea</div>
        </Link>
    )
}