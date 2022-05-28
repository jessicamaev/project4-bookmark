import React from 'react';

import Navigation from "./components/Navbar";
import Homepage from "./components/Homepage";
// import Routes from "./Routes";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <Navigation />
      <Homepage />
      {/* <Routes /> */}
      <Footer />

    </div>
  );
}

export default App;
