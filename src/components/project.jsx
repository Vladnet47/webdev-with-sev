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
            className="project"
        >
            <h2>{name}</h2>
            <p>{expanded ? description : null}</p>
            {/* <button
                onClick={e => {
                    e.preventDefault();
                    updateExpanded(!expanded);
                }}
            >{expanded ? "Hide" : "Expand"}</button> */}
        </div>
    );
}