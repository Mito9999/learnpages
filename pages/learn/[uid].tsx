import { Text, Spinner, Heading, Image, Badge, HStack } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverUrl } from "../../utils";
import { useRouter } from "next/router";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Page: NextPage = ({ pageData }: any) => {
  const { isFallback } = useRouter();

  return (
    <>
      {isFallback ? (
        <Spinner />
      ) : (
        <>
          <Heading>{pageData.title}</Heading>
          <Image src={pageData.image} alt={pageData.title + " cover image"} />
          <HStack spacing="8px" my="10px">
            {pageData.tags.map((tag: string, i: number) => (
              <Badge key={tag + " tag " + i}>{tag}</Badge>
            ))}
          </HStack>
          <Text>Estimated Cost: {currencyFormatter.format(pageData.cost)}</Text>
          <Text>Estimated Time: {pageData.hours} hours</Text>
          <Text>
            Created: {new Date(pageData.dateCreated).toLocaleString()}
          </Text>
          <Text>Edited: {new Date(pageData.dateEdited).toLocaleString()}</Text>
        </>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { uid } = context.params;

  try {
    const res = await fetch(serverUrl + "/api/data/" + uid);
    if (!res.ok) throw new Error("Not found");

    const pageData = await res.json();
    return { props: { pageData } };
  } catch {
    return { notFound: true };
  }
};

export default Page;
