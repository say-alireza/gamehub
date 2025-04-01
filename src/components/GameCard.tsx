import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderEndRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody minHeight="120px">
        {" "}
        {/* Adjust pixel value as needed */}
        <Heading fontSize="2xl" noOfLines={2}>
          {" "}
          {/* Limit to 2 lines */}
          {game.name}
        </Heading>
        <PlatformIconList   platforms={game.parent_platforms} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
