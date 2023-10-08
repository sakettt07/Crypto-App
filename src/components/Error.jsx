import React from 'react'
import Lottie from 'lottie-react';
import error2 from '../lottie/error2.json';
import { VStack } from '@chakra-ui/react';
import "./Error.css"


const Error = () => {
  return (
    <VStack justifyContent={'center'} h="100vh" bgColor={"#ffffff"} >
          <Lottie className='animate' height={200} width={300} animationData={error2} />
          <h1 className='text' >Error while fetching the data</h1>
          
    </VStack>
  )
}

export default Error;
