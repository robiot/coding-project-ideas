import React from "react";

export function Textbox({className, ...props}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
    const classname = className + " py-2 px-5 bg-gray-700 rounded-md bg-gray-700 mb-2 w-full focus:outline-none focus:ring";
    return (
        <textarea className={classname} {...props} />
    )
}