import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  Heading,
  SimpleGrid,
  Box,
  Image,
  Stack,
  Badge,
  Text,
} from "@chakra-ui/react";
import { serverUrl } from "../utils";

const Home: NextPage = ({ pages }: any) => {
  return (
    <>
      <Head>
        <title>Learnpages</title>
        <meta name="description" content="The #1 place to learn!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Learnpages</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {pages.map((page: any) => (
          <Box
            key={page.uid}
            borderRadius="20px"
            border="1px solid"
            borderColor="gray.300"
          >
            <Image
              src={page.image}
              alt={page.title + " cover image"}
              objectFit="cover"
              w="100%"
              h={["200px", "calc(56.25% / 2)", "calc(56.25% / 3"]}
              borderTopRadius="20px"
            />
            <Box p="15px">
              <Heading as="h3" size="md">
                {page.title}
              </Heading>
              <Stack direction="row" spacing="8px" my="10px">
                {page.tags.map((tag: string, i: number) => (
                  <Badge key={tag + " tag " + i} w="fit-content">
                    {tag}
                  </Badge>
                ))}
              </Stack>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                iste fugiat totam voluptatum placeat quis autem ipsam cupiditate
                esse inventore quibusdam, nam quos unde provident dolore modi,
                nesciunt ea delectus dolorum at velit tempora. Excepturi
                sapiente eaque aliquam exercitationem, aspernatur modi natus
                nostrum magnam perspiciatis necessitatibus vitae similique
                laborum eum.
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(serverUrl + "/api/pages");
    if (!res.ok) throw new Error("Not found");

    const pages = await res.json();
    return { props: { pages } };
  } catch {
    return { props: { pages: [] } };
  }
};

export default Home;
