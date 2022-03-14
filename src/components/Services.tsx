import { Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { ServiceItem } from './ServicesItem'

export const Services = () => {
  return (
    <Center
      w="100%"
      h="fit-content"
      bg="url('/assets/bg_image_2.png')"
      bgSize="cover"
      bgPos="center"
      flexDir="column"
      py="50px"
      px="10px"
    >
      <Heading fontSize="60px" mb="30px">
        Nossos Serviços
      </Heading>
      <Flex w="100%" maxW="1400px" justify="center">
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="500px"
          w="100%"
          justify="center"
        >
          <ServiceItem>
            <Heading>Regularização Ambiental</Heading>
            <Text pt="20px">
              • Processo de licenciamento ambiental
              <br /> • Elaboração de documentação técnica (RAS, RADA, RCA, PCA,
              EIA, RIMA, PAE)
              <br /> • Processos para Outorga de uso de água ou intervenção em
              recurso hídrico
              <br /> • Processos para supressão de vegetação, recuperação de
              áreas degradadas, CAR, intervenção em APP, SINAFLOR. Elaboração de
              PRAD, PTRF e PUP
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading>Tratamento de Efluentes</Heading>
            <Text pt="20px">
              • ETE sanitária e/ou industrial: Projeto, avaliação e proposição
              de adequação <br />• PRECEND/COPASA: Elaboração de Projeto Técnico{' '}
              <br />• Declaração de Carga Poluidora junto ao SISEMA/MG <br />•
              Estudo de capacidade suporte de carga de corpo receptor de
              efluentes <br />• Ensaio de infiltração para dimensionamento de
              sumidouros
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading>Resíduos Sólidos</Heading>
            <Text pt="20px">
              • Cadastro no Sistema MTR, suas movimentações, treinamento,
              emissão da DMR
              <br />• Inventário Nacional de Resíduos junto ao SINIR/MMA
              <br />• Elaboração de PGRS - Plano de Gerenciamento dos Resíduos
              Sólidos
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading>IBAMA</Heading>
            <Text pt="20px">
              • Inscrição e Regularização junto ao CTF – Cadastro Técnico
              Federal
              <br />• Verificação de situação da TCFA – Taxa de Controle e
              Fiscalização Ambiental
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading>Gerenciamento Ambiental</Heading>
            <Text pt="20px">
              • Elaboração de Diagnóstico Ambiental
              <br />• Plano de Gestão Ambiental
              <br />• Gerenciamento Ambiental
              <br />• Plano de Gestão para Uso Racional de Água
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading>Outros</Heading>
            <Text pt="20px">
              • Elaboração de PEA segundo DN COPAM Nº 214/2017
              <br />• Registro e regularização de Motosserra
              <br />• Assistência técnica a empresas, em perícias judiciais
              <br />• Treinamentos e palestras tema ambiental
            </Text>
          </ServiceItem>
        </SimpleGrid>
      </Flex>
    </Center>
  )
}
