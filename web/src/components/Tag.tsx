import React from "react";
import Link from "next/link";

export function Tag({ children, href}: {children, href: string}) {
    return (
        <Link href={ href } passHref>
            <div className="py-1 px-5 text-sm rounded-md cursor-pointer bg-blue-400 hover:bg-blue-500">{ children }</div>
        </Link>
    )
}