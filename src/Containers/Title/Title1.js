import React from 'react'
import {Box,Text} from '@chakra-ui/react'
const Title1 = () => {
  const pair = 'USD/JPY'
  const pairDescription= 'US dollar / Japanese Yen'
  const marketStatus = 'Market closed'
  return (
    <Box cursor="pointer" w='100%' display='flex'flexDir='column' justifyContent='center' p='20px'> 
            <Text fontSize='3xl'fontWeight='500'>
                {pair}
            </Text>
            <Text fontSize='1xl' fontWeight='400' mt='-10px'>
                {pairDescription}
            </Text>
            <Text fontSize='sm' mt='-2px'fontWeight='200' textAlign='end'>
                {marketStatus}
            </Text>
    </Box>
  )
}

export default Title1