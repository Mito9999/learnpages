import Head from "next/head";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learnpages</title>
        <meta name="description" content="The #1 place to learn!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Learnpages</Heading>
    </>
  );
}
