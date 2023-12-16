import React from 'react';

function NoteInput({ currentNote, setCurrentNote }) {
  return (
    <textarea
      value={currentNote}
      onChange={(e) => setCurrentNote(e.target.value)}
      placeholder="Note text goes here..."
    />
  );
}

export default NoteInput;
