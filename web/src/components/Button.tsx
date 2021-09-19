import React from "react";
import Link from "next/link";

export function Button({ children, href, ...props }: {children, href: string} & React.HTMLAttributes <HTMLDivElement>) {
    props.className += " py-2 px-5 rounded-md cursor-pointer";
    return (
        <Link href={ href }>
            <div {...props} >{ children }</div>
        </Link>
    )
}