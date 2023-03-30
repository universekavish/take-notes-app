import React from "react";
import { Link } from "react-router-dom";

// props example - which can also be used in below way after destructuring the prop
// const ListItem = (props) => {
//     return(
//         <div>
//             <h3>{props.note.body}</h3>
//         </div>
//     )
// }

// we can destructure props by this manner instead of above.
const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className="notes-list-item">
                <h3>{note.body}</h3>

            </div>
        </Link>
    )
}

export default ListItem;