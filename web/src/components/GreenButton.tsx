import React from "react";
import Link from "next/link";

export function GreenButton(props) {
    return (
        <Link href={ props.href } passHref>
            <div className="py-2 px-5 rounded-md cursor-pointer bg-green-500 hover:bg-green-600 text-center" >{ props.children }</div>
        </Link>
    )
}