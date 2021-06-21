import { Heading, Flex, Button, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { useColorMode } from "@chakra-ui/react";

const Navbar = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Flex my="30px" justify="space-between" direction={["column", "row"]}>
      <Heading textAlign={["center", "initial"]}>
        <Link href="/">Learnpages</Link>
      </Heading>
      <HStack spacing="3" mx={["auto", "initial"]} mt={["15px", "0px"]}>
        <Button
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
        >
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        <Link href="/create" passHref>
          <Button variant="outline">Create Page</Button>
        </Link>
        <Link href="/signin" passHref>
          <Button>Sign In</Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
