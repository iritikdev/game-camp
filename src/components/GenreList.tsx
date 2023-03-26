import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "./../hooks/useGenres";
import getOptimizedImageUrl from "./../services/image-url";
import GenreListSkeleten from "./GenreListSkeleten";

function GenreList() {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return null;
  return (
    <List>
      {isLoading && skeletons.map((s) => <GenreListSkeleten key={s} />)}
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
