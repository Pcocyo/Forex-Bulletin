import React from "react";
import { Box } from "@chakra-ui/react";
import Title1 from "../Containers/Title/Title1";
import Title2 from "../Containers/Title/Title2";
import Title3 from "../Containers/Title/Title3";
const Overview = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    >
      <Box
        width='80%'
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="200px"
        bgColor='white'
        boxShadow='0 2px 5px rgba(57, 55, 254, 0.2)' p='3' rounded='md'
      >
        <Title1 />
        <Title2 />
        <Title3 />
      </Box>
    </Box>
  );
};

export default Overview;
