import React from 'react';
import './NoteInput.css';

function NoteInput({ currentNote, setCurrentNote, onSave }) {
  return (
    <div className="note-input-container">
      <textarea
        className="note-input"
        value={currentNote}
        onChange={(e) => setCurrentNote(e.target.value)}
        placeholder="Type your note here..."
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default NoteInput;
