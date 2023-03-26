import { HStack, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";

function GenreListSkeleten() {
  return (
    <HStack py={2}>
      <SkeletonCircle borderRadius={8} />

      <SkeletonText noOfLines={1} flex={1} />
    </HStack>
  );
}

export default GenreListSkeleten;
