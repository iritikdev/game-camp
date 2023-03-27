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
import { Platform } from "./../hooks/useGames";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

function PlatformSelector({ onSelectPlatform, selectedPlatform }: Props) {
  const { platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Box my={4}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronRight />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {platforms.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}

export default PlatformSelector;
