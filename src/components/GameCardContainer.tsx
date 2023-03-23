import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GameCardContainer({ children }: Props) {
  return (
    <Card width={"275px"} borderRadius={"10"} overflow="hidden">
      {children}
    </Card>
  );
}

export default GameCardContainer;
