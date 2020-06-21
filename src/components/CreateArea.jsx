import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/fab";
import Zoom from "@material-ui/core/Zoom"
function CreateArea(props) {
    const [notes, addNote] = useState({
        title: "",
        content: ""
    })
    const [isExpanded, setExpanded] = useState(false);

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
            <form className="create-note">
                { isExpanded && <input name="title" placeholder="Title" value={notes.title} onChange={handleChange} /> }
                <textarea name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={notes.content} onChange={handleChange} onClick={() => setExpanded(true)}/>
                <Zoom in={isExpanded}>
                    <Fab onClick={(evt) => {
                        evt.preventDefault();
                        props.addNote(notes);
                        addNote({
                            title: "",
                            content: ""
                        })
                    }} ><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
// onClick={(evt) => props.addNote(evt)}