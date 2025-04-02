import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenereList from './components/GenereList'

function App() {
  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr"
      }}
      >
        <GridItem area="nav">
          <Navbar/>
        </GridItem>
        <Show above="md">
          <GridItem area="aside" paddingX={5}>
            <GenereList/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App