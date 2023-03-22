import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

interface Props {}

function Navbar({}: Props) {
  return (
    <HStack justifyContent={"space-between"} py="2" px={"3"}>
      <Image src="/vite.svg" />

      <ColorModeSwitch />
    </HStack>
  );
}

export default Navbar;
