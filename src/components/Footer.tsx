import { Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const Footer = () => {
  return (
    <Center
      w="100%"
      h="fit-content"
      bgSize="cover"
      bgPos="center"
      flexDir="column"
      py="50px"
      px="10px"
      bg="gray.900"
    >
      <Text>
        Rua Quintino Bocaiuva, 94, B. Morro Chic, Itajubá - MG, 37.500-090
      </Text>

      <Text>Tel/Whastapp (35) 3623-2396 | 98803-2396</Text>

      <Text>gmonaco@garciamonaco.com.br</Text>
    </Center>
  )
}
