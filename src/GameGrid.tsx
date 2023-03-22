import { useState, useEffect } from "react";
import apiClient from "./services/api-client";

interface Props {}

interface Game {
  id: number;
  name: String;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

function GameGrid(props: Props) {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  const fetchGames = async () => {
    try {
      const { data } = await apiClient.get<FetchGamesResponse>("/xgames");
      setGames(data.results);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </div>
  );
}

export default GameGrid;
