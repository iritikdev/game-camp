import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Genre } from "./useGenres";

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
  rating: number;
  rating_top: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

interface Props {
  selectedGenre: Genre | null;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  const fetchGames = async (controller: AbortController) => {
    setLoading(true);
    try {
      const { data } = await apiClient.get<FetchGamesResponse>("/games", {
        signal: controller.signal,
        params: { genres: selectedGenre?.id, platfroms: selectedPlatform?.id },
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
  }, [selectedGenre?.id, selectedPlatform?.id]);

  return { games, error, isLoading };
};

export default useGames;
