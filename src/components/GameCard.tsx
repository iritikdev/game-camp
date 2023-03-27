import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import GamePlatformIcon from "./GamePlatformIcon";
import getOptimizedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Image src={getOptimizedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <GamePlatformIcon platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading
          fontSize={"xl"}
          display="flex"
          flexWrap={"wrap"}
          gap="2"
          alignItems={"center"}
        >
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </GameCardContainer>
  );
}

export default GameCard;
