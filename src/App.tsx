import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";

import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem gridArea={"main"}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
