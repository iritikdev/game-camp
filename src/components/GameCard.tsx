import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import CriticScore from "./CriticScore";
import GamePlatformIcon from "./GamePlatformIcon";
import getOptimizedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={"10"} overflow="hidden" width={"300px"}>
      <Image src={getOptimizedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <GamePlatformIcon platforms={game.parent_platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
