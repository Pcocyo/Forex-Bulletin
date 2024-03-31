import React from "react";
import { Text, Box } from "@chakra-ui/react";

const Title2 = () => {
  const currentPrice = "151.365";
  const date = "As of 4:57:04 AM GMT+8";
  return (
    <Box>
      <Text fontSize="2xl">Price</Text>
      <Text fontSize="3xl">{currentPrice}</Text>
      <Text fontSize="sm">{date}</Text>
    </Box>
  );
};

export default Title2;
