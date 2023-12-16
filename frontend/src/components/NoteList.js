import React from 'react';
import NoteCard from './NoteCard';

function NoteList({ notes }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} />
      ))}
    </div>
  );
}

export default NoteList;
