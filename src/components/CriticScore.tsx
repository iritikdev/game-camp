import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const badgeColor = score >= 75 ? "green" : score >= 60 ? "gold" : "";
  return (
    <Badge
      fontSize="14px"
      paddingX={"2"}
      borderRadius="md"
      colorScheme={badgeColor}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
