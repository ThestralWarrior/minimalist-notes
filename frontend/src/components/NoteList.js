import React from 'react';

function NoteList({ notes }) {
  return (
    <ul>
      {notes.map((note, index) => (
        <li key={index}>{note}</li>
      ))}
    </ul>
  );
}

export default NoteList;
