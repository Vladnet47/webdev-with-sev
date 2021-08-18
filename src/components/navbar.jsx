import React from "react";

export default function Navbar(props = {}) {
    const { message } = props;
    return (
        <div>
            {message ? message : "Not defined"}
        </div>
    );
}