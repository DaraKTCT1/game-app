import { Heading } from "@chakra-ui/react";
import { GameQueryType } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
interface PropType {
  gameQuery: GameQueryType;
}
const GameHeading = ({ gameQuery }: PropType) => {

  const platform = usePlatform(gameQuery.platformId)
  const genre = useGenre(gameQuery.genreId)

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
