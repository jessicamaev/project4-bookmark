import React from "react";
import "./Navbar.css";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

function Navigation({ onCreateNewBookmark }) {
    return (
        <Navbar className="logo" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/" style={{ color: "black" }}>
                <strong>Bookmark</strong>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-links">

                    <Nav.Link style={{ color: "black" }} href="/folders">
                        Folders
        </Nav.Link>

                    <Nav.Link style={{ color: "black" }} href="/about">
                        About
        </Nav.Link>


                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="nav-search"
                    />

                </Nav>
            </Navbar.Collapse>

            <Form inline>
                <Button onClick={onCreateNewBookmark} variant="outline-dark">Add Link</Button>
            </Form>

            <Nav.Link style={{ color: "black" }} href="/login">
                Login
        </Nav.Link>

            <Nav.Link style={{ color: "black" }} href="/logout">
                Logout
        </Nav.Link>

        </Navbar>
    );
}

export default Navigation;