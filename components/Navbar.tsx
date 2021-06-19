import { Heading, Flex, Button, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex my="30px" justify="space-between">
      <Heading>Learnpages</Heading>
      <HStack spacing="3">
        <Button>
          <FaMoon />
        </Button>
        <Button variant="outline">Create Page</Button>
        <Button>Sign In</Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
