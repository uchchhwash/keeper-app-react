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

    return (
        <div>
            <Header />
            <CreateArea addNote={insertNote} />
            {noteList.map((note, index) => <Note key={index} title={note.title} content={note.content} />)}
          
            <Footer />
        </div>
    );
}

export default App;
