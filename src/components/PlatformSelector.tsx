import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronRight } from "react-icons/bs";
import usePlatforms from "./../hooks/usePlatforms";

function PlatformSelector() {
  const { platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Box my={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight />}>
          Platform
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
