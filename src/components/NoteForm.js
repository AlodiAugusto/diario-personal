import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/* noteText: texto ingresado, noteTextNow actualización de espacio de texto ""
   por modificación o envió a app.js */
const NoteForm = ({ createNote }) =>  /*Funcion de app.js addNewNotes */
  
  {
      const [noteText, noteTextNow] = useState(''); //Estado actual de la caja de texto (Vacio)
      const characterLimit = 300; // Límite de caracteres por nota

      const handleChange = (e) => {
        if (characterLimit - e.target.value.length >= 0) { 
          //Quedan caracteres por usar limite - cantidad escrita es mayor a 0
          noteTextNow(e.target.value);
          //Actualiza estado con lo escrito noteTextNow -> noteText
      }
    
  };

  const handleSubmit = (e) => {
      e.preventDefault(); /*Evita recarga de la pantalla tras mandar form */
      if (noteText.trim().length > 0) { /* El texto debe ser mayor a 0 strings sin contar espacios */
        createNote(noteText); /* Agarra el estado actual de noteForApp 
        y envia el texto escrito a la lista de notas de app.js */
        noteTextNow('');   // Limpia el campo de texto
      }
    };

  return (
      <div className="note-form container col-md-6 ">
          <form onSubmit={handleSubmit}>
              <textarea
                  className= "form-control"
                  rows="6"
                  cols="50"
                  placeholder="Escribe tu nota aquí..."
                  value={noteText}
                  onChange={handleChange}
              ></textarea>
              <div className="note-form-footer">
                  <small className="characterLimit">{characterLimit - noteText.length} caracteres restantes</small>
                  <button className="button btn btn-dark" type="submit">Añadir Nota</button>
              </div>
          </form>
    </div>
    );
  };

export default NoteForm;