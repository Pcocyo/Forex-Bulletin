import React from 'react'
import {Box,Text} from '@chakra-ui/react'
const Title1 = () => {
  const pair = 'USD/JPY'
  const pairDescription= 'US dollar / Japanese Yen'
  const marketStatus = 'Market closed'
  return (
    <Box>
            <Text fontSize='3xl'>
                {pair}
            </Text>
            <Text fontSize='1xl'>
                {pairDescription}
            </Text>
            <Text fontSize='sm'>
                {marketStatus}
            </Text>

    </Box>
  )
}

export default Title1