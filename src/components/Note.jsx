import React from "react";

function Note() {
  return (
    <div className="note">
      <h1>{props.topic}</h1>
      <p>{props.text}</p>
    </div>
  );
}

export default Note;
