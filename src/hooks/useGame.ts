import apiClient from "../services/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";
interface FetchGameResponse {
  count: number;
  results: Game[];
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;

  }
export interface Platform{
    id: number;
    name: string;
    slug: string;
  }
const useGame = () => {
  const controller = new AbortController();
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGame;
