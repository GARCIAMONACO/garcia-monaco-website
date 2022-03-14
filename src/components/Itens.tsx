import { Center, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { CardItem } from './CardItem'

export const Itens = () => {
  return (
    <Center w="100%" h="fit-content" flexDir="column" mb="100px">
      <Heading
        color="blue.600"
        fontSize="60px"
        borderBottom="10px solid #C2E3BC"
        pb="10px"
      >
        Nossos Valores
      </Heading>
      <Flex mt="30px" w="100%" h="100%" justify="center" mx="auto">
        <SimpleGrid
          flex="1"
          gap="4"
          w="100%"
          minChildWidth="250px"
          maxW="1400px"
          justify="center"
          align="center"
        >
          <CardItem title="Postura Ética">
            Transparência e responsabilidade, primando pela legalidade na
            prestação de serviço.
          </CardItem>

          <CardItem title="Respeito">
            Primar pelo respeito à vida, às pessoas, ao meio ambiente e à
            legislação.
          </CardItem>

          <CardItem title="Inovação">
            Melhoria contínua através de ferramentas de inovação, com foco no
            cliente.
          </CardItem>

          <CardItem title="Reconhecimento">
            Valorização do capital humano, promovendo o crescimento pessoal e
            profissional da equipe
          </CardItem>

          <CardItem title="Remuneração Justa">
            Remuneração compatível com a responsabilidade dos serviços prestados
          </CardItem>
        </SimpleGrid>
      </Flex>
    </Center>
  )
}
