import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: { platform: Platform }[];
  iconSize?: string | number;
  spacing?: string | number;
}

const iconMap: Record<string, IconType> = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
};

const PlatformIconList = ({ 
  platforms, 
  iconSize = "14px", 
  spacing = "8px" 
}: Props) => {
  return (
    <HStack marginTop={2} spacing={spacing}>
      {platforms.map(({ platform }) => {
        const IconComponent = iconMap[platform.slug];
        if (!IconComponent) return null;
        
        return (
          <Icon 
            as={IconComponent} 
            key={platform.id}
            boxSize={iconSize}
            color="gray.500"
            title={platform.name}
            _hover={{
              color: "white",
              transform: "scale(1.1)", // Optional: slight zoom effect
              transition: "all 0.2s ease-in-out"
            }}
            cursor="pointer"
          />
        );
      })}
    </HStack>
  );
};

export default PlatformIconList;