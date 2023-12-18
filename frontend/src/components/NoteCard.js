import React from 'react';
import './NoteCard.css'; //

function NoteCard({ note }) {
  return (
    <div className="note-card">
      <p>{note}</p>
      {/* TODO:  Edit/Delete Icons*/}
    </div>
  );
}

export default NoteCard;
