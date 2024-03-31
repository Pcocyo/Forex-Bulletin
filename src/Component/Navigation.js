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
        <Box 
        borderTop='11px solid #7E30E1'
        rounded='lg'
        cursor='pointer'
        mb='10px'
        bgColor='#F3F8FF'
        boxShadow='0 2px 5px rgba(57, 55, 254, 0.2)'
        p='10px'>
            <Text fontSize='3xl' fontWeight='500'>USD/JPY</Text>
            <Text fontSize='1xl'fontWeight='200' mt='-6px' textAlign='end'>151.365</Text>
        </Box> 
        <Box 
        borderTop='11px solid #7E30E1'
        rounded='lg'
        cursor='pointer'
        mb='10px'
        bgColor='#F3F8FF'
        boxShadow='0 2px 5px rgba(57, 55, 254, 0.2)'
        p='10px'>
            <Text fontSize='3xl' fontWeight='500'>EUR/USD</Text>
            <Text fontSize='1xl'fontWeight='200' mt='-6px' textAlign='end'>151.365</Text>
        </Box> 
       
    </Box>
  )
}

export default Navigation