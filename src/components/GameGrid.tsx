
import { SimpleGrid, Skeleton, Text} from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
    const {games,error,isLoading} = useGames()
    const Skeletons = [1,2,3,4,5,6]
   return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1,md:3,lg:4,xl:5}} spacing={10}>
        {isLoading && Skeletons.map(Skeleton => <GameCardSkeleton key={Skeleton}></GameCardSkeleton>)}
        {games.map(game => <GameCard key={game.id} game={game}></GameCard>)}
    </SimpleGrid>
    </>
  )
}

export default GameGrid