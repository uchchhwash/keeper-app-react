import React, { useState } from "react";

function CreateArea(props) {
    const [notes, addNote] = useState({
        title: "",
        content: ""
    })


    function handleChange(evt) {
        const { name, value } = evt.target;

        addNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            }
        })

    }
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" value={notes.title} onChange={handleChange} />
                <textarea name="content" placeholder="Take a note..." rows="3" value={notes.content} onChange={handleChange} />
                <button onClick={(evt) => {
                    evt.preventDefault();
                    props.addNote(notes);
                }} >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
// onClick={(evt) => props.addNote(evt)}