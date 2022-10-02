import cat1 from './assets/cat1.jpg';
import { Image, Button, Center } from '@chakra-ui/react'
import React, { useState } from "react";

function Secret() {
  const [showCat, setShowCat] = useState(false);
  let image;
  let button;

  if (!!showCat) {
    image = (<Image
               onClick={() => setShowCat(false)}
               src={cat1}
               alt='uyu'
               boxSize={'100vh'}
               objectFit='cover'
             />)
    button = ''
  } else {
    image = ''
    button = (<Button onClick={() => setShowCat(true)} >Dont touch!</Button>)
  }

  return (
    <Center className='content' >
        {image}
        {button}
    </Center>
  );
}

export default Secret;
