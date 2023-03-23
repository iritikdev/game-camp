import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: String;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  const fetchGames = async () => {
    setLoading(true);
    try {
      const { data } = await apiClient.get<FetchGamesResponse>("/games");
      setGames(data.results);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
