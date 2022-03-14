import { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '../styles/theme'

import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Garcia Monaco</title>

        <link rel="shortcut icon" href="/img/icon-512.png" />

        <link rel="apple-touch-icon" href="/img/icon-512.png" />

        <link rel="manifest" href="/manifest.json" />

        <meta name="description" content="Garcia Monaco" />
      </Head>

      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
