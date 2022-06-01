///create new bookmark (seperate for update and delete components page?)

///1. install npm install react-modal
///2. create a regular HTML form in components -> wrap form with modal component
/// create a component for alert form *** 
/// - open/ display or not

import React from "react";
import ReactModal from 'react-modal';
import { Form, Row, Col, Button } from "react-bootstrap";

import "./CreateNewBookmark.css"


function CreateNewBookmark({ isOpen, onClose }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onClose={onClose}
        >

            <div className="form">
                <h1>Create New Bookmark</h1>

                {/* <form className="CreateNewBookmarkForm" action="/createNewBookmark">

                    <label for="url">Link: </label>
                    <input type="text"></input><br></br>

                    <label for="title">Title: </label>
                    <input type="text"></input><br></br>

                    <label for="description">Text: </label>
                    <input type="text"></input><br></br>

                    <input type="submit" value="submit"></input>
                </form> */}

                <form className="CreateNewBookmarkForm" method="POST" action="http://localhost:3001/CreateNewBookmark">


                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalUrl">
                        <Form.Label column sm={2}>
                            Link:
    </Form.Label>
                        <Col sm={10}>
                            <input input type="text" id="newLink" name="url"
                                placeholder="www.example.com/article" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalTitle">
                        <Form.Label column sm={2}>
                            Title:
    </Form.Label>
                        <Col sm={10}>
                            <Form.Control input type="text" id="title"
                                name="newTitle" placeholder="Custom Title" />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalDescription">
                        <Form.Label column sm={2}>
                            Description:
    </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text"
                                id="newDescription"
                                name="description"
                                placeholder="Description" />
                        </Col>
                    </Form.Group>

                    {/* submit button */}
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Form.Group>
                </form>

            </div>

            <button onClick={onClose}>Close</button>



        </ReactModal >


    )
}



export default CreateNewBookmark;