import { ChakraProvider, Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Navbar from "@components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Container maxW="1200px">
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
