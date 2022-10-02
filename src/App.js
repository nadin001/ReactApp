import cat1 from './assets/cat1.jpg';
import './App.css';
import { Image, Box, Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'
import React, { useState } from "react";

function App() {
  const [showCat, setShowCat] = useState(false);
  let image;
  let button;

  if (!!showCat) {
    image = (<Image
               onClick={() => setShowCat(false)}
               src={cat1}
               alt='uyu'
               boxSize='500px'
               objectFit='cover'
             />)
    button = ''
  } else {
    image = ''
    button = (<Button onClick={() => setShowCat(true)} colorScheme='blue'>Dont touch!</Button>)
  }

  return (
    <ChakraProvider className="App">
        {image}
        {button}
    </ChakraProvider>
  );
}

export default App;
