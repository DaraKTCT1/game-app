import { Badge } from "@chakra-ui/react";

interface PropType{
    score: number;
}
const CriticScore = ({score}: PropType) => {
    let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="1rem" paddingX={2} colorScheme={color} borderRadius={"4px"}>{score}</Badge>
  )
}

export default CriticScore