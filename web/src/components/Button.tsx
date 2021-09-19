import React from "react";
import Link from "next/link";

export function Button({ children, href}: {children, href: string}) {
    return (
        <Link href={ href } passHref>
            <div className="py-2 px-5 rounded-md cursor-pointer bg-blue-500 hover:bg-blue-600" >{ children }</div>
        </Link>
    )
}