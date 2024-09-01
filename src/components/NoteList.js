import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NoteList = ({notesForList}) => {
  return (
    <div className=  "container col-md-6 bg-white border border-primary rounded">
      <h3 className="my-notes-title">Mis Notas</h3>
        <ul className = "my-notes">
            {notesForList.map((note) => (
              <li className='border border-dark rounded' key={note.id}>
                  <p class="lead fs-6">{note.date}</p>
                  <p class="lead fs-5">{note.text}</p> 
              </li>
            ))}
        </ul>
    </div>
  );
};

export default NoteList;