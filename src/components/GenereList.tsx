import { List, ListItem, Image, Text, Box, HStack, Spinner, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import {Genre} from  "../hooks/types"
import getCroppedImageUrl from "../Services/image-url";

interface Props
{
  onSelectGenre : (genre:Genre) => void;
}
const GenreList = ({onSelectGenre}:Props) => {
  const { data:genres , isLoading , error} = useGenres();
  if (error) return null
  if (isLoading) return <Spinner></Spinner>
  
  return (
    <Box paddingY={3}>
      <List spacing={2}>
        {genres.map((genre:Genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background
                )}
                alt={genre.name}
              />
              <Button 
                onClick={()=> onSelectGenre(genre)}
                fontSize="lg" 
                variant="link"
                fontWeight="medium"
                // _hover={{ color: "white", cursor: "pointer" }}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;