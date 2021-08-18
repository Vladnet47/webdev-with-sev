import React, { useState } from "react";
import './project.css';

export default function Project(props = {}) {
    const { name, description } = props;
    const [expanded, updateExpanded] = useState(false);

    return (
        <div
            onMouseEnter={e => {
                e.preventDefault();
                updateExpanded(true);
            }}
            onMouseLeave={e => {
                e.preventDefault();
                updateExpanded(false);
            }}
            className={"project " + (Math.floor(Math.random() * 4) >= 3 ? "fat" : "")}
        >
            <h2>{name}</h2>
            <p>{expanded ? description : null}</p>
        </div>
    );
}