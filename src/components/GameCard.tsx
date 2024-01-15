import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGame"

interface PropType{
    game: Game;
}
const GameCard = ({game}: PropType) => {
  return (
    <Card borderRadius={10} overflow="hidden" >
        <Image src={game.background_image}  />
        <CardBody>
            <Heading fontSize="2xl" >{game.name}</Heading>
        </CardBody>
    </Card>
  )
}

export default GameCard