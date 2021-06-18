import { Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

const Page: NextPage = ({ pageData }: any) => {
  return <Text>/{pageData.uid}</Text>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // fetch("/uid-list")
  const uidList = ["vscode", "cars"];
  const paramList = uidList.map((uid) => ({ params: { uid } }));
  return {
    paths: paramList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { uid } = context.params;
  // const res = await fetch("/data-source/" + uid);
  // const pageData = await res.json();

  return {
    props: {
      pageData: { uid },
    },
  };
};

export default Page;
