import React from "react";
import notes from '../assets/data';
import ListItem from "../components/ListItem";

const NotesListPage = () => {
    return (
        <div>
            <div className="notes-list">
                {notes.map((note, index) => (
                    // note={note} is the way to passing props.
                    <ListItem key={index} note={note}/>
                ))}
            </div>
        </div>
    )
}

export default NotesListPage;