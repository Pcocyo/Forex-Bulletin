import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Title2 = () => {
  const currentPrice = "151.365";
  const date = "As of 4:57:04 AM GMT+8";
  return (
    <Box
      cursor="pointer"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignContent="center"
      h="100px"
      paddingLeft="10px"
      paddingRight="20px"
    >
      <Text fontSize="2xl" fontWeight="400">
        Price
      </Text>
      <Text fontSize="3xl" fontWeight="500" mt="-10px">
        {currentPrice}
      </Text>
      <Text fontSize="sm" align="end" fontWeight="200" mt="-6px">
        {date}
      </Text>
    </Box>
  );
};

export default Title2;
