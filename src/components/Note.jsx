import React from "react";
import { isPropertySignature } from "typescript";
import notes from "../sampleNotes";
function Note(props){
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;