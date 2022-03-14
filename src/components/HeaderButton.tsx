import { Button } from '@chakra-ui/react'
import React from 'react'

export const HeaderButton: React.FC = ({ children }) => {
  return (
    <Button
      h="100"
      borderRadius="0"
      variant="ghost"
      colorScheme="blue"
      color="gray.500"
      _hover={{ backgroundColor: 'blue.500', color: 'white' }}
    >
      {children}
    </Button>
  )
}
