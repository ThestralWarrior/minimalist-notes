import React, { useState } from 'react';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import './App.css';
function App() {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState('');

  const handleSaveNote = () => {
    setNotes([...notes, currentNote]);
    setCurrentNote('');
  };

  return (
    <div className="app">
      <h1>Minimalist Notes App</h1>
      <NoteInput 
        currentNote={currentNote} 
        setCurrentNote={setCurrentNote} 
        onSave={handleSaveNote} // Passing handleSaveNote as a prop
      />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
