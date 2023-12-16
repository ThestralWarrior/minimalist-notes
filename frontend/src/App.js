import React, { useState } from 'react';

import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleSaveNote = () => {
    setNotes([...notes, currentNote]);
    setCurrentNote('');
  };

  return (
    <div className="app">
      <NoteInput 
        currentNote={currentNote} 
        setCurrentNote={setCurrentNote} 
      /><br/>
      <button onClick={handleSaveNote}>Save</button>
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
