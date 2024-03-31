import React from 'react'
import {Text,Box} from '@chakra-ui/react'
const Title3 = () => {
  const totalChange = '0.009'
  return (
    <Box>
        <Text fontSize='2xl'>1 day change</Text>
        <Text fontSize='3xl'>{totalChange}</Text>
    </Box>
  )
}

export default Title3