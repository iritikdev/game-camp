import useGames from "../hooks/useGames";

interface Props {}

function GameGrid(props: Props) {
  const { games, error } = useGames();
  console.log("Games:", games);

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
