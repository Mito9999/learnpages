import { Flex, Heading } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      h="calc(100vh - 103px)"
    >
      <Heading>404</Heading>
      <Heading>Page Not Found</Heading>
    </Flex>
  );
}
