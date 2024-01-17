import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface PropType{
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: PropType) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize="6.5rem" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
