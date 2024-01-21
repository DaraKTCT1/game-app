import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots"
interface Props{
    gameId: number
}
const GameScreenshots = ({gameId}: Props) => {
    const {data,error,isLoading} = useScreenShots(gameId)
    if(isLoading) return null;
    if(error) throw error;
  return (
    <SimpleGrid marginTop={2} columns={{base: 1,md: 2}} spacing={2}>
        {data?.results.map(file => 
        <Image rounded="2xl" src={file.image} key={file.id}  />)}
    </SimpleGrid>
  )
}

export default GameScreenshots
