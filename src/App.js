import './App.css';
import Header from './components/Header';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

   // Función para añadir una nueva nota
  const addNewNoteInAppList = (text) => {

      const opciones = {day:"numeric", month:"numeric", year:"numeric" };
      const newNote = {
        id: Date.now(), // ID único basado en la marca de tiempo
        text: text,
        date: new Date().toLocaleString('es-ES', opciones), //Fecha de nota a string
      };
     setNewNotes([...notes, newNote]); 
     /* La spread syntax ... crea una copia superficial de un array o un objeto. 
     ["nota"] inicio, modificación ["nota nueva", nota]
     se usa para crear un nuevo array que incluye todas las notas actuales más la nueva nota. */
   };

    /* Estado cambiante: array de notas a mostrar que se actualiza 
    inicialmente vació */
  const [notes, setNewNotes] = useState([]); // Notes []

 

  // El parametro para addNote que recibe NoteForm es envíado por la función addNewNote
  
  return (
    <div className="App bg-primary-subtle">
        <Header />
        <NoteForm createNote ={addNewNoteInAppList}/>
        <NoteList notesForList = {notes} />
    </div>
  );
}

export default App;
