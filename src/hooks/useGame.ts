import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGame = (selectGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectGenre?.id } }, [
    selectGenre?.id,
  ]);

export default useGame;
