import useGameTrailer from "../hooks/useGameTrailer";
interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  return first ? (
    <video width="100%" src={first.data[480]}
     poster={first.preview} 
     controls
    />
  ) : null;
};

export default GameTrailer;
