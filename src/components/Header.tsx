import { Center, Flex, HStack, IconButton } from '@chakra-ui/react'
import React from 'react'
import { HeaderButton } from './HeaderButton'
import { RiFacebookFill, RiInstagramLine, RiLinkedinFill } from 'react-icons/ri'
import { HeaderIconButton } from './HeaderIconButton'

import Image from 'next/image'

export const Header = () => {
  return (
    <Center h="100px" w="100%" bg="gray.100">
      <Flex
        justify="space-between"
        maxWidth="1350px"
        w="100%"
        h="100%"
        mx="30px"
      >
        <Center h="100%">
          <Image
            src="/assets/small_logo.png"
            layout="fixed"
            height="80px"
            width="154px"
          />
        </Center>
        <Flex>
          <HStack spacing="0">
            <HeaderButton>Início</HeaderButton>
            <HeaderButton>Sobre Nós</HeaderButton>
            <HeaderButton>Serviços</HeaderButton>
            <HeaderButton>Contatos</HeaderButton>
            <HeaderButton>Clientes</HeaderButton>
          </HStack>
          <HStack ml="30px">
            <HeaderIconButton aria-label="facebook">
              <RiFacebookFill size="24px" />
            </HeaderIconButton>

            <HeaderIconButton aria-label="instagram">
              <RiInstagramLine size="24px" />
            </HeaderIconButton>

            <HeaderIconButton aria-label="linkedin">
              <RiLinkedinFill size="24px" />
            </HeaderIconButton>
          </HStack>
        </Flex>
      </Flex>
    </Center>
  )
}
