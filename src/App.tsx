import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem gridArea={"nav"} bgColor="antiquewhite">
        Nav
      </GridItem>

      <Show above="lg">
        <GridItem gridArea={"aside"} bgColor="Yellow">
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea={"main"} bgColor="gold">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
