import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"
interface PropType{
    children: ReactNode;
}
const GameCardContainer = ({children}: PropType) => {
  return (
    <Box  _hover={{
      transform: "scale(1.03)",
      transition: "transform 150 ease-in"
    }} borderRadius={10} overflow="hidden">
        {children}
    </Box>
  )
}

export default GameCardContainer;