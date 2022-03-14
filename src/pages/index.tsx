import { Center, Flex } from '@chakra-ui/react'

import React from 'react'
import { AboutUs } from '../components/AboutUs'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Itens } from '../components/Itens'
import { MainLogoContainer } from '../components/MainLogoContainer'
import { Partners } from '../components/Partners'
import { Services } from '../components/Services'

export default function Home() {
  return (
    <Flex
      align="flex-start"
      justify="start"
      w="100%"
      maxW="100vw"
      h="100vh"
      flexDir="column"
      boxSizing="border-box"
    >
      <Header />
      <MainLogoContainer />
      <AboutUs />
      <Itens />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </Flex>
  )
}
