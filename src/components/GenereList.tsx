import { List, ListItem, Image, Text, Box, HStack, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

const GenreList = () => {
  const { genres , isLoading , error} = useGenres();
  if (error) return null
  if (isLoading) return <Spinner></Spinner>
  
  return (
    <Box paddingY={3}>
      <List spacing={2}>
        {genres.map((genre) => (
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
              <Text 
                fontSize="lg" 
                fontWeight="medium"
                _hover={{ color: "white", cursor: "pointer" }}
              >
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default GenreList;