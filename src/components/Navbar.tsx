import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {}

function Navbar({}: Props) {
  return (
    <HStack justifyContent={"space-between"} py="4" px={"5"}>
      <Text letterSpacing={"4"} fontWeight="600" fontSize={"22px"}>
        RAWG
      </Text>

      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
