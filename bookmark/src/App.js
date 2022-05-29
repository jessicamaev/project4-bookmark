import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

///missing: router -> route 

import Navigation from "./components/Navbar";
import Homepage from "./components/Homepage";
import Routes from "./Routes";
import Footer from "./components/Footer";
import CreateNewBookmark from "./components/CreateNewBookmark";


import './App.css';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Router>

      <div className="App">
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <Navigation onCreateNewBookmark={() => setIsModalOpen(true)} />
        <Routes />
        <Footer />
        <CreateNewBookmark isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      </div>
    </Router>
  );
}

export default App;
