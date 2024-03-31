import React from 'react'
import {Box,Text} from '@chakra-ui/react'
const Navigation = () => {
  return (
    <Box
    boxShadow='0 2px 5px rgba(57, 55, 254, 0.2)' p='3' rounded='md'
    h='100%'
    ml='16px'
    bgColor='white'
    display='flex'
    flexDirection='column'
    >
        <Box borderTop='2px solid red' cursor='pointer'>
            <Text fontSize='3xl'>Usd/Jpy</Text>
            <Text fontSize='1xl'>151.365</Text>
        </Box> 
        <Box borderTop='2px solid red' cursor='pointer'>
            <Text fontSize='3xl'>Usd/Jpy</Text>
            <Text fontSize='1xl'>151.365</Text>
        </Box>
        <Box borderTop='2px solid red' cursor='pointer'>
            <Text fontSize='3xl'>Usd/Jpy</Text>
            <Text fontSize='1xl'>151.365</Text>
        </Box>
    </Box>
  )
}

export default Navigation