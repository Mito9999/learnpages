import { ColorModeScript } from "@chakra-ui/color-mode";
import {
  ChakraProvider,
  Container,
  extendTheme,
  ThemeConfig,
} from "@chakra-ui/react";
import Navbar from "@components/Navbar";
import type { AppProps } from "next/app";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: { overflowX: "hidden !important", overflowY: "scroll !important" },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container maxW="1200px">
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
