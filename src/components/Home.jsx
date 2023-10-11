import React from 'react';
import { Box, Image,Text } from '@chakra-ui/react';
// import {motion } from "framer-motion";
import bit from "../assets/bitcp2.png";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w={"full"} h={"100vh"}>
      <Image w={"full"} h={"xl"} objectFit={"contain"} src={bit} />
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
        mt={"-49"}
      >
        Visit Crypto
      </Text>
    </Box>
  )
}

export default Home
