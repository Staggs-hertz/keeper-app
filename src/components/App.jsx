import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

//Challenge. Render all the notes inside notes.js as a seperate Note component.

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteItem) => (
        <Note
          key={noteItem.key}
          topic={noteItem.title}
          text={noteItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
