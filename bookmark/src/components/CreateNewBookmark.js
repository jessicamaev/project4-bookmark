///create new bookmark (seperate for update and delete components page?)

///1. install npm install react-modal
///2. create a regular HTML form in components -> wrap form with modal component
/// create a component for alert form *** 
/// - open/ display or not

import React from "react";
import ReactModal from 'react-modal';

function CreateNewBookmark({ isOpen, onClose }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onClose={onClose}
        >
            <h1>Create New Bookmark</h1>
            <p>Form goes here (1.html form)</p>
            <form action="/createNewBookmark">

            </form>

            <button onClick={onClose}>Close</button>

        </ReactModal>
    )
}



export default CreateNewBookmark;