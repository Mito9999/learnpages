import { Heading, Flex, Button, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Flex my="30px" justify="space-between">
      <Heading>
        <Link href="/">Learnpages</Link>
      </Heading>
      <HStack spacing="3">
        <Button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        <Button variant="outline">
          <Link href="/create">Create Page</Link>
        </Button>
        <Button>
          <Link href="/signin">Sign In</Link>
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
