import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

function GameCardSkeleton() {
  return (
    <GameCardContainer>
      <Skeleton height={"225px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </GameCardContainer>
  );
}

export default GameCardSkeleton;
