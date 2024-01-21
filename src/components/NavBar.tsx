import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Link to="/">
      <HStack padding={"10px"}>
        <Image src={logo} boxSize="6.5rem" />
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </Link>
  );
};

export default NavBar;
