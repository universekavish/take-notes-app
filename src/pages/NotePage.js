 import React from 'react';
 import { useParams } from 'react-router-dom';
 import notes from '../assets/data';

 const NotePage = (props) => {
    let params = useParams()
    let noteId = params.id
    // console.log("noteId: ", noteId)
    let note = notes.find(note => note.id === Number(noteId))
    return(
        <div>
            <p>{note?.body}</p>
        </div>
    )
 }

 export default NotePage;