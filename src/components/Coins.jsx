import React, { useState } from "react";
import axios from "axios";
import { server } from "../main";
import { useEffect } from "react";
import { Button, Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import { Link } from "react-router-dom";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,SetError] =useState(false);
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState("inr");

  const currencySymbol=currency==="inr"?"₹" :currency==="eur"?"€":"$"



  useEffect(() => {
    const fetchCoin = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        SetError(true);
        setLoading(false);
      }

    };
    fetchCoin();
  }, [currency,page]);
  if(error) return (
    <Error message={"Error while fetching the coins "} />
  )

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
              id={i.id}
                key={i.id}
                name={i.name}
                img={i.image}
                price={i.current_price}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack>
            <Button>2</Button>
          </HStack>
        </>
      )}
    </Container>
  );
};
const CoinCard = ({ id,name, img, symbol, price,currencySymbol="₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.3s"} m={"4"} css={{"&:hover": {
          transform: "scale(1.1)",
        },}} >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"Contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1} >{symbol}</Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
    </VStack>
  </Link>
);
export default Coins;
