import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
const logo = "https://github.com/DaraKTCT1/image/blob/main/logo.png?raw=true";

const NavBar = () => {
  return (
    <Link to="/">
      <HStack padding={"10px"}>
        <Image src={logo} boxSize={{base: 65,md: 120}} />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Link>
  );
};

export default NavBar;
