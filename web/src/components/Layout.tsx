import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            <div className="container-md mx-auto mt-20 mb-10">
                {children}
            </div>
        </div>
    )
}