import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import { useState,useEffect } from 'react';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { server } from '../main';
import Error from './Error';

const CoinDetails = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,SetError] =useState(false);
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState("inr");
  const params=useParams();


  useEffect(() => {
    const fetchCoins = async () => {

      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        SetError(true);
        setLoading(false);
      }

    };
    fetchCoins();
  }, [params.id]);
  if(error) return (
    <Error />
  )

  return (
    <Container>
      {
        loading?<Loader />:(
          <>
          <Box width={"full"} borderWidth={1}>sdf</Box>
            </>
        )
      }
    </Container>
  )
}

export default CoinDetails
