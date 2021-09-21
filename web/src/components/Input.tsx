import React from "react";

export function Input({className, ...props}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    const classname = className + " py-2 px-5 rounded-md bg-gray-700 mb-2 w-full focus:outline-none focus:ring";
    return (
        <input className={classname} {...props} />
    )
}