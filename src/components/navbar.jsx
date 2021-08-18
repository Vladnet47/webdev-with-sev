import React from "react";
import { useHistory } from "react-router-dom";

export default function Navbar(props = {}) {
    const history = useHistory();

    return (
        <div>
            <button 
                onClick={e => {
                    e.preventDefault();
                    history.push('/projects');
                }}
            >Projects</button>
            <button 
                onClick={e => {
                    e.preventDefault();
                    history.push('/blog');
                }}
            >Blog</button>
        </div>
    );
}