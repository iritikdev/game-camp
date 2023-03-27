import {
  Button,
  HStack,
  Switch,
  Text,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
interface Props {}

function ColorModeSwitch({}: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode} variant="ghost">
      {colorMode === "dark" && <MdDarkMode size={"24"} />}
      {colorMode === "light" && <MdOutlineDarkMode size={"24"} />}
    </Button>
    // <HStack>
    //   <Switch
    //     isChecked={colorMode === "dark"}
    //     colorScheme="green"
    //     onChange={toggleColorMode}
    //   />
    //   <Text>Dark Mode</Text>
    // </HStack>
  );
}

export default ColorModeSwitch;
