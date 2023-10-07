import React, { useState } from "react";
import axios from "axios";
import { server } from "../main";
import { useEffect } from "react";
import { Container, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,SetError] =useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {

      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        SetError(true);
        setLoading(false);
      }


    };
    fetchExchanges();
  }, []);
  if(error) return (
    <Error message={"Error while fetching the exchanges "} />
  )

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};
const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
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
      <Heading size={"md"} noOfLines={1} >{rank}</Heading>
      <Text noOfLines={1}>{name}</Text>
    </VStack>
  </a>
);
export default Exchanges;
