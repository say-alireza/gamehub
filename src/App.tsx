import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenereList from './components/GenereList'
import { useState } from 'react'
import { Genre } from './hooks/types'
import PlatformSelector from './components/PlatformSelector'
function App() {
   const [selectedGenre,setSelectedGenre] = useState<Genre | null >(null)

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
            <GenereList onSelectGenre={(genre) => setSelectedGenre(genre)}/>
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector ></PlatformSelector>
          <GameGrid selectedGenre={selectedGenre}/>
        </GridItem>
      </Grid>
    </>
  )
}

export default App