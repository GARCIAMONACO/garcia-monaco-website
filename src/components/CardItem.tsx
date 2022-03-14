import { Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { HiStar } from 'react-icons/hi'

interface Data {
  title: string
}

export const CardItem: React.FC<Data> = ({ children, title }) => {
  return (
    <Flex
      w="100%"
      maxW="250px"
      h="320px"
      bg="blue.600"
      borderRadius="10px"
      flexDir="column"
      p="20px"
      boxShadow="-8px 8px 0px 1px #C2E3BC"
      alignItems="center"
      mx="auto"
    >
      <Center
        w="90px"
        h="90px"
        borderRadius="full"
        bg="#75AF5B"
        mb="20px"
        boxShadow="dark-lg"
      >
        <HiStar size="60px" />
      </Center>
      <Heading size="md" align="center" borderBottom="2px solid #c2e3bc8b">
        {title}
      </Heading>
      <Text align="center" pt="20px">
        {children}
      </Text>
    </Flex>
  )
}
