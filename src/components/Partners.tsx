import {
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import React from 'react'

export const Partners = () => {
  return (
    <Center
      w="100%"
      h="fit-content"
      bgSize="cover"
      bgPos="center"
      flexDir="column"
      py="50px"
      px="10px"
    >
      <Heading fontSize="60px" mb="80px" color="blue.600">
        Nossos Parceiros
      </Heading>
      <Flex w="100%" maxW="1400px" justify="center">
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="300px"
          w="100%"
          justify="center"
          rowGap="90px"
        >
          <Image src="/assets/parceiro_1.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_2.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_3.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_4.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_5.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_6.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_7.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_8.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_9.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_10.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_11.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_12.png" alt="parceiro" mx="auto" />
          <Image src="/assets/parceiro_13.png" alt="parceiro" mx="auto" />
        </SimpleGrid>
      </Flex>
    </Center>
  )
}
