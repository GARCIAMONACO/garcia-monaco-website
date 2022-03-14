import { Center } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

export const MainLogoContainer = () => {
  return (
    <Center
      w="100%"
      minH="680px"
      bgImage="url('/assets/bg_image.png')"
      bgPos="center"
      bgSize="cover"
    >
      <Image
        src="/assets/big_white_logo.png"
        layout="fixed"
        width="400"
        height="255"
      />
    </Center>
  )
}
