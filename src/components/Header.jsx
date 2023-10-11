import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HStack p={"5"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"green"} ml={"22"} fontSize={"2xl"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"gold"} fontSize={"2xl"}>
        <Link to="/Exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"silver"} fontSize={"2xl"}>
        <Link to="/Coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
