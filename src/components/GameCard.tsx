import { Card, CardBody, Heading, Image, Flex, Box, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCorrptedImageUrl from "../Services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card
      borderRadius={10}
      overflow="hidden"
      height="100%" 
      display="flex" 
      flexDirection="column"
    >
      <Box height="200px" overflow="hidden">
        <Image
          src={getCorrptedImageUrl(game.background_image)}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={game.name}
        />
      </Box>

      <CardBody flex={1} display="flex" flexDirection="column" p={3}>
        <Flex direction="column" height="100%">
          <Heading fontSize="lg" noOfLines={2} mb={2} flexShrink={0}>
            {game.name}
          </Heading>

          <Box flex={1} minHeight="20px" />

          <HStack justifyContent="space-between" alignItems="center" mt={2}>
            <PlatformIconList platforms={game.parent_platforms} spacing={2} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GameCard;
