import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [noteList, addNotelist] = useState([])

    function insertNote(notes) {
        addNotelist(noteList => {
            return [...noteList, notes]
        })
    }

    function deleteNote(dNote){
        addNotelist((prevList) => {
            return prevList.filter((prevItem, index) => {
                return dNote !== index;
            })
        })

    }

    return (
        <div>
            <Header />
            <CreateArea addNote={insertNote} />
            {noteList.map((note, index) => <Note key={index} id={index} title={note.title} content={note.content} onDelete={deleteNote}/>)}
            <Footer />
        </div>
    );
}

export default App;
