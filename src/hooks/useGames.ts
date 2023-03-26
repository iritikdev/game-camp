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

  const fetchGames = async (controller: AbortController) => {
    setLoading(true);
    try {
      const { data } = await apiClient.get<FetchGamesResponse>("/games", {
        signal: controller.signal,
      });
      setGames(data.results);
      setLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) return;
      setError((err as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchGames(controller);
    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
