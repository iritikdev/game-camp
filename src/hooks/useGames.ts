import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: String;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    try {
      const { data } = await apiClient.get<FetchGamesResponse>("/games");
      setGames(data.results);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return { games, error };
};

export default useGames;
