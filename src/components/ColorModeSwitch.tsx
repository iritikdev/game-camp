import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

interface Props {}

function ColorModeSwitch({}: Props) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme="green"
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
}

export default ColorModeSwitch;
