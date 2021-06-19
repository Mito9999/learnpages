import type { NextPage } from "next";
import Head from "next/head";
import { Heading, Flex } from "@chakra-ui/react";

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Learnpages - Create a page</title>
        <meta
          name="description"
          content="Easily create a shareable guide for learning new things."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        justify="center"
        align="center"
        direction="column"
        h="calc(100vh - 103px)"
      >
        <Heading>Coming Soon</Heading>
      </Flex>
    </>
  );
};

export default Create;
