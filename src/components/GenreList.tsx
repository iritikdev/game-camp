import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "./../hooks/useGenres";
import getOptimizedImageUrl from "./../services/image-url";
import GenreListSkeleten from "./GenreListSkeleten";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

function GenreList({ onSelectGenre }: Props) {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (error) return null;
  return (
    <List>
      {isLoading && skeletons.map((s) => <GenreListSkeleten key={s} />)}
      {genres.map((genre) => (
        <ListItem py={2} key={genre.id}>
          <HStack>
            <Image
              src={getOptimizedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button onClick={() => onSelectGenre(genre)} variant={"link"}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
