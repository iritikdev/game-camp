import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import GamePlatformIcon from "./GamePlatformIcon";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card borderRadius={"10"} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"xl"}>{game.name}</Heading>
        <GamePlatformIcon platforms={game.parent_platforms} />
      </CardBody>
    </Card>
  );
}

export default GameCard;
