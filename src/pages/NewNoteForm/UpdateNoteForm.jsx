
import { useState } from "react";
import * as notesAPI from '../../utilities/notes-api';
// import * as crud from "../../../crud-helper"

export default function UpdateNoteForm({ idx, id , addNote }) {
    // console.log("ID:",id)
    const [updateNote, setUpdateNote] = useState('');
    
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState('');

    function handleEdit() {
        setEdit(true);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setEdit({ ...edit, [name]: value });
        setError(''); 
    }


    async function handleUpdateNote(evt) {
        evt.preventDefault();
        try {
            addNote(edit);
            console.log(edit)
            const updateNote = await notesAPI.updateNote({id, edit})
            console.log("updateNote", updateNote)
            setEdit({ text: ""});

            // console.log('Update response:', UpdateNote);
        } catch {
            setError('Update Note Failed - Try Again');
        }
    }

    return (
        <div  >
            {/* <form className="UpdateNoteForm" onSubmit={handleUpdateNote}> */}
            <button onClick={handleEdit} >Update Note</button>
            {/* </form> */}
            <form onSubmit={handleUpdateNote} >

                <input
                    type="text"
                    name="text" value={edit.text}
                    style={{ visibility: edit ? 'visible' : 'hidden' }}
                    onChange={handleChange}
                />
                <button
                    style={{ visibility: edit ? 'visible' : 'hidden' }} >submit note</button>
            </form>
            <p className="error-message">&nbsp;{error}</p>
        </div>

    )
}
