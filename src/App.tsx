import { useState } from 'react'
import {  Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'

function App() {
  return (
    <>
    <Grid templateAreas={{
      base:`"nav""main"`,
      lg : `"nav nav " "aside main"`,
    }}>
      <GridItem area="nav" bg="">

        <Navbar/>
      </GridItem>
      <Show above='lg'>
      <GridItem area="aside" bg="gold">Aside</GridItem>
      </Show>
      <GridItem area="main" bg="">
        <GameGrid/>
      </GridItem>

    </Grid>
    </>
  )
}

export default App
