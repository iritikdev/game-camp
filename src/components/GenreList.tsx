import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "./../hooks/useGenres";
import getOptimizedImageUrl from "./../services/image-url";

function GenreList() {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => (
        <ListItem py={2}>
          <HStack>
            <Image
              src={getOptimizedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
