import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SimpleGrid } from "@chakra-ui/react";
import { serverUrl } from "@utils/index";
import type { Data } from "@type/index";
import PageCard from "@components/PageCard";

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
            <PageCard image={page.image} tags={page.tags} title={page.title} />
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
