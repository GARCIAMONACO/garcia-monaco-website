import {
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Text,
  Textarea
} from '@chakra-ui/react'
import React from 'react'

import {
  RiMailSendLine,
  RiUser3Line,
  RiMailLine,
  RiPhoneLine
} from 'react-icons/ri'

export const Contact = () => {
  return (
    <Center
      w="100%"
      h="fit-content"
      bgSize="cover"
      bgPos="center"
      flexDir="column"
      py="50px"
      px="10px"
      bg="linear-gradient(217.6deg, #22539C -2.66%, rgba(41, 87, 164, 0.4) -2.66%, #3D58A0 -2.66%, #477B84 52.88%, #6FA367 109.59%, #75AF5B 109.59%);"
    >
      <HStack borderBottom="10px solid #C2E3BC" pb="10px" mb="50px">
        <RiMailSendLine size="60px" />
        <Heading fontSize="60px" mb="80px">
          Contato
        </Heading>
      </HStack>
      <Text>Deixe sua mensagem que retornaremos em breve!</Text>
      <Flex w="100%" maxW="1400px" justify="center" flexDir="column" mt="20px">
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="480px"
          w="100%"
          justify="center"
        >
          <InputGroup mx="auto">
            <InputLeftElement>
              <RiUser3Line color="#75AF5B" />
            </InputLeftElement>
            <Input
              placeholder="Nome Completo"
              variant="outline"
              bg="white"
              color="gray.800"
              colorScheme="green"
              _placeholder={{ color: 'gray.400' }}
            />
          </InputGroup>

          <InputGroup mx="auto">
            <InputLeftElement>
              <RiMailLine color="#75AF5B" />
            </InputLeftElement>
            <Input
              placeholder="Email"
              variant="outline"
              bg="white"
              color="gray.800"
              colorScheme="green"
              _placeholder={{ color: 'gray.400' }}
            />
          </InputGroup>

          <InputGroup mx="auto">
            <InputLeftElement>
              <RiPhoneLine color="#75AF5B" />
            </InputLeftElement>
            <Input
              placeholder="Celular"
              variant="outline"
              bg="white"
              color="gray.800"
              colorScheme="green"
              _placeholder={{ color: 'gray.400' }}
            />
          </InputGroup>

          <InputGroup mx="auto">
            <InputLeftElement>
              <RiPhoneLine color="#75AF5B" />
            </InputLeftElement>
            <Input
              placeholder="Telefone"
              variant="outline"
              bg="white"
              color="gray.800"
              colorScheme="green"
              _placeholder={{ color: 'gray.400' }}
            />
          </InputGroup>
        </SimpleGrid>
        <Textarea
          mt="20px"
          bg="white"
          color="gray.800"
          colorScheme="green"
          _placeholder={{ color: 'gray.400' }}
          placeholder="Digite aqui sua mensagem!"
          h="200px"
        />
        <Button
          mt="20px"
          variant="solid"
          colorScheme="green"
          color="white"
          bg="#75AF5B"
          _hover={{ backgroundColor: '#4E7349' }}
        >
          Enviar Mensagem
        </Button>
      </Flex>
    </Center>
  )
}
