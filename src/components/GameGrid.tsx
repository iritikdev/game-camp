import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

function GameGrid({ selectedGenre, selectedPlatform }: Props) {
  const { games, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing="5"
        justifyContent="center"
      >
        {isLoading && skeletons.map((s) => <GameCardSkeleton key={s} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
