import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <HStack p={"4"} backgroundColor={"#000000"} className={"header"}>
      <Button variant={"unstyled"} color={"white"}  fontSize={"xl"} className={"headerbtn"}>
        <Link className="a" to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} fontSize={"xl"} className={"headerbtn"}>
        <Link to="/Exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} fontSize={"xl"} className={"headerbtn"}>
        <Link to="/Coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
