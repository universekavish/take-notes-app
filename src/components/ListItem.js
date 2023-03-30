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
const ListItem = ({note}) => {
    return(
        <Link to={`/note/${note.id}`}>
            <h3>{note.body}</h3>
        </Link>
    )
}

export default ListItem;