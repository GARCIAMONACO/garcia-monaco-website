import { Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

import { RiMagicLine, RiFocus2Line } from 'react-icons/ri'

export const AboutUs = () => {
  return (
    <Center w="100%" minH="680px" h="fit-content" flexDir="column" px="20px">
      <Heading
        color="blue.600"
        fontSize="60px"
        borderBottom="10px solid #C2E3BC"
        pb="10px"
      >
        Sobre Nós
      </Heading>
      <Flex w="100%" h="fit-content" mt="30px" justify="center">
        <SimpleGrid
          flex="1"
          gap="4"
          h="fit-content"
          minChildWidth="600px"
          w="100%"
          maxW="1400px"
          alignItems="center"
          justifyItems="center"
        >
          <Flex
            w="100%"
            maxW="650px"
            h="255px"
            bg="blue.600"
            borderRadius="10px"
            flexDir="column"
            p="20px"
            boxShadow="-8px 8px 0px 1px #C2E3BC"
          >
            <Flex w="100%" justify="space-between">
              <Heading borderBottom="6px solid #C2E3BC">Nossa Visão</Heading>
              <RiMagicLine size="60px" />
            </Flex>
            <Text w="400px" pt="30px">
              Ser referência em inovação quanto ao atendimento das necessidades
              do cliente dentro da área de meio ambiente.
            </Text>
          </Flex>

          <Flex
            w="100%"
            maxW="650px"
            h="255px"
            bg="blue.600"
            borderRadius="10px"
            flexDir="column"
            p="20px"
            boxShadow="-8px 8px 0px 1px #C2E3BC"
          >
            <Flex w="100%" justify="space-between">
              <Heading borderBottom="6px solid #C2E3BC">Nossa Missão</Heading>
              <RiFocus2Line size="60px" />
            </Flex>
            <Text w="400px" pt="30px">
              Prestar serviços com vistas a regularização dos clientes perante a
              legislação ambiental e auxiliando-os na construção de uma imagem
              de respeito ao meio ambiente.
            </Text>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Center>
  )
}
