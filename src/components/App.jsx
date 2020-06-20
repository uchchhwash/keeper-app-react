import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import sampleNotes from "../sampleNotes"
function App(){
    return (<div>
        <Header/>
        {sampleNotes.map(note => (<Note
        key={note.key}
        title={note.title}
        content={note.content}
        />))}
        <Footer/>
    </div>);
}

export default App;