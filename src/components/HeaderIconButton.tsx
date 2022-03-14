import { IconButton, IconButtonProps } from '@chakra-ui/react'
import React from 'react'

export const HeaderIconButton: React.FC<IconButtonProps> = ({
  children,
  ...rest
}) => {
  return (
    <IconButton
      variant="solid"
      colorScheme="green"
      color="white"
      borderRadius="full"
      bg="#75AF5B"
      _hover={{ backgroundColor: '#4E7349' }}
      {...rest}
    >
      {children}
    </IconButton>
  )
}
