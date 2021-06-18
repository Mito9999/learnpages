import { Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serverUrl } from "../../utils";

const Page: NextPage = ({ pageData }: any) => {
  return <Text>/{pageData.uid}</Text>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(serverUrl + "/api/uid-list");
  const data: { uids: string[] } = await res.json();
  const paramList = data.uids.map((uid) => ({ params: { uid } }));

  return {
    paths: paramList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { uid } = context.params;
  const res = await fetch(serverUrl + "/api/data/" + uid);
  const pageData = await res.json();

  return {
    props: {
      pageData: { uid },
    },
  };
};

export default Page;
