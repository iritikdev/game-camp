import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import GamePlatformIcon from "./GamePlatformIcon";
import getOptimizedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <GameCardContainer>
      <Image src={getOptimizedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <GamePlatformIcon platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </GameCardContainer>
  );
}

export default GameCard;
