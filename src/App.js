import Secret from './Secret';
import Home from './Home';
import Header from './Header';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import React from "react";
import Footer from './Footer';

function App() {
  return (
    <ChakraProvider className="App">
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/secret" element={<Secret />} />
        </Routes>
        <Footer />

    </ChakraProvider>
  );
}

export default App;
