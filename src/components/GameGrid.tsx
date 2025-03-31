
import { SimpleGrid, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

const GameGrid = () => {
    const {games,error} = useGames()
   return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:3,lg:4,xl:5}} spacing={10}>
        {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid