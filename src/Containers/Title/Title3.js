import React from "react";
import { Text, Box } from "@chakra-ui/react";
const Title3 = () => {
  const totalChange = "0.009";
  return (
    <Box
      cursor="pointer"
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      p="20px"
    >
      <Text fontSize="2xl" fontWeight='400'>1 day change</Text>
      <Text fontSize="3xl" fontWeight='500' mt='-8px'>{totalChange}</Text>
    </Box>
  );
};

export default Title3;
