import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";

import {
  SiAndroid,
  SiLinux,
  SiWindows,
  SiXbox,
  SiPlaystation,
  SiNintendo,
  SiApple,
} from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons/lib/esm/iconBase";

interface Props {
  platforms: { platform: Platform }[];
}

function GamePlatformIcon({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    pc: SiWindows,
    playstation: SiPlaystation,
    xbox: SiXbox,
    nintendo: SiNintendo,
    mac: SiApple,
    linux: SiLinux,
    android: SiAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack my={2}>
        {platforms.map(({ platform }) => (
          <Icon
            key={platform.id}
            as={iconMap[platform.slug]}
            color={"gray.500"}
          />
        ))}
      </HStack>
    </>
  );
}

export default GamePlatformIcon;
