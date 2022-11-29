import {useState} from 'react';

import './Appcomment.css';

const emptyNote = {
    content: '', author: ''
};

function Appcomment() {
    // - States
    const [note, setNote] = useState(emptyNote);
    const [editNote, setEditNote] = useState(null);

    const [allNotes, setAllNotes] = useState([]);  //เก็บทั้งหมด
    

    // - Functions
    function onNoteValueChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }
    function onEditNoteValueChange(event) {
        const { name, value } = event.target;
        setEditNote((prevEditNote) => {
            return {
                ...prevEditNote,
                [name]: value
            };
        });
    }
    function onNoteSubmit(event) {
        event.preventDefault();

        // Add note
        setAllNotes((prevAllNotes) => {
            const newNote = { ...note };
            newNote.id = Date.now().toString();
            return [newNote, ...prevAllNotes];
        });

        // Clear form
        setNote(emptyNote);
    }
    function onNoteDelete(noteId){
            setAllNotes((prevAllNotes)=>{
            return prevAllNotes.filter((theNote)=>{
                  return theNote.id !== noteId;
            
            });
        });
    }

   // - Elements
   const allNotesElements = allNotes.map((theNote) => {
    return (
        <div key={theNote.id} className="app-note">
            <p>{theNote.content}</p>
            <h5>{theNote.author}</h5>
            <p>
                <a onClick={() => {setEditNote(theNote)}}>Edit</a>
                <span> | </span>
                <a onClick={() => {onNoteDelete(theNote.id)}}>Delete</a>
            </p>
        </div>
    );
});
    
function onEditNoteSubmit(event) {
    event.preventDefault();

    // Edit note
    setAllNotes((prevAllNotes) => {
        return prevAllNotes.map((note) => {
            if (note.id !== editNote.id) return note;
            return editNote;
        });
    });

    // Clear edit form
    setEditNote(null);
}
    let editNoteElement = null;
    if(!!editNote){
        editNoteElement =(
        <div className = "app-edit-note">        
                  <form onSubmit ={onEditNoteSubmit}>
                    <p>
                        <textarea
                            rows="5"
                            color='3'
                            placeholder="ความคิดเห็น"
                            name="content"
                            value={editNote.content}
                            onChange ={onEditNoteValueChange}
                        />
                    </p>
                    <p>
                        <input
                            type="text"
                            placeholder="ชื่อ"
                            name="author"
                            value={editNote.author}
                            onChange ={onEditNoteValueChange}
                        />
                    </p>
                    <p>
                        <button type="submit">Edit</button>
                    </p>
                </form>
        </div>
        )
    }
    ////////////////////////
    return (
 
        <section className="app-section">
            <div className="app-container">
                <form onSubmit={onNoteSubmit}>
                    <p>
                        <textarea
                            rows="3"
                            color='3'
                            placeholder="ความคิดเห็น"
                            name="content"
                            value={note.content}
                            onChange={onNoteValueChange}
                        />
                    </p>
                    <p>
                        <input
                           
                            type="text"
                            placeholder="ชื่อ"
                            name="author"
                            value={note.author}
                            onChange={onNoteValueChange}
                        />
                    </p>
                    <p>
                        <button type="submit">Submit</button>
         
                    </p>
                </form>
                <div className="app-notes">
                    {allNotesElements}
                </div>
            </div>
            <div className="app-notes-edit">
            {editNoteElement}
            </div>
        </section>
  
    );
}

export default Appcomment;