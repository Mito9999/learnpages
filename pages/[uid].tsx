import { useRouter } from "next/router";
import { Text } from "@chakra-ui/react";

const Page = () => {
  const router = useRouter();
  const { uid } = router.query;

  return <Text>/{uid}</Text>;
};

export default Page;
