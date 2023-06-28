import "./App.css";
import React from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";

import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  const navigationData = [
    { title: "Home" },
    { title: "Guides" },
    { title: "Flights" },
    { title: "About" },
  ];
  return (
    <>
      <Navigation data={navigationData} />
      <Home />
      <Form />
      <Footer />
    </>
  );
}

export default App;
