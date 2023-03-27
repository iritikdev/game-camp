import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { useState } from "react";

import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem gridArea={"nav"}>
        <Navbar />
      </GridItem>

      <Show above="lg">
        <GridItem gridArea={"aside"} paddingX="5" py={"6"}>
          <Text fontSize={"2xl"} fontWeight={"bold"} mb="2" cursor={"pointer"}>
            Genres
          </Text>
          <GenreList
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} py="6" px={6}>
        {!selectedGenre && (
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            {"All Games"}
          </Text>
        )}
        {selectedGenre && (
          <Text fontSize={"4xl"} fontWeight={"bold"}>
            {selectedGenre?.name + " Games"}
          </Text>
        )}
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectPlatform={(platform) => setSelectedPlatform(platform)}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
