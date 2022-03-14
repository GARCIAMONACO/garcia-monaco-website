import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    headings: 'Roboto',

    body: 'Roboto'
  },

  styles: {
    global: {
      body: {
        bg: 'gray.50'
      },
      _focus: {
        boxShadow: 'none !important'
      }
    }
  }
})
