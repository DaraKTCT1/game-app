import {  HStack, useColorMode } from "@chakra-ui/react";
import { MdLightMode,MdDarkMode } from "react-icons/md";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack fontSize={35}>
      {/* <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text> */}
      <button onClick={toggleColorMode}>
         {colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </HStack>
  );
};

export default ColorModeSwitch;
