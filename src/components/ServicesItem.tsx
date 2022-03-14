import { Flex } from '@chakra-ui/react'
import React from 'react'

export const ServiceItem: React.FC = ({ children }) => {
  return (
    <Flex
      maxW="600px"
      w="100%"
      h="300px"
      bg="white"
      borderRadius="10px"
      boxShadow="dark-lg"
      color="blue.600"
      flexDir="column"
      p="20px"
      mx="auto"
    >
      {children}
    </Flex>
  )
}
