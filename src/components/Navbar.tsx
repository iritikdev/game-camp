import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

function Navbar({}: Props) {
  return (
    <HStack>
      <Image src="/vite.svg" />
      <Text>Navbar</Text>
    </HStack>
  );
}

export default Navbar;
