import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {}

function Navbar({}: Props) {
  return (
    <HStack justifyContent={"space-between"} py="4" px={"5"}>
      <Text fontWeight="800" fontSize={"18px"}>
        R A W G
      </Text>

      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
