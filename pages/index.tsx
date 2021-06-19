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
  AspectRatio,
} from "@chakra-ui/react";
import { serverUrl } from "@utils/index";
import type { Data } from "@type/index";

type Props = {
  pages: Data[];
};

const Home: NextPage<Props> = ({ pages }) => {
  return (
    <>
      <Head>
        <title>Learnpages</title>
        <meta name="description" content="The #1 place to learn!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {pages.map((page: Data) => (
          <Link key={page.uid} href={`/learn/${page.uid}`} passHref={true}>
            <Box
              borderRadius="20px"
              border="1px solid"
              borderColor="gray.300"
              cursor="pointer"
              _hover={{ transform: "scale(1.03)" }}
              transition="transform 150ms ease"
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={page.image}
                  alt={page.title + " cover image"}
                  objectFit="cover"
                  borderTopRadius="20px"
                />
              </AspectRatio>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae iste fugiat totam voluptatum placeat quis autem ipsam
                  cupiditate esse inventore quibusdam, nam quos unde provident
                  dolore modi, nesciunt ea delectus dolorum at velit tempora.
                  Excepturi sapiente eaque aliquam exercitationem, aspernatur
                  modi natus nostrum magnam perspiciatis necessitatibus vitae
                  similique laborum eum.
                </Text>
              </Box>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(serverUrl + "/api/pages");
    if (!res.ok) throw new Error("Not found");

    const pages: Data[] = await res.json();
    return { props: { pages } };
  } catch {
    return { props: { pages: [] } };
  }
};

export default Home;
