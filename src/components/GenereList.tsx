import { List, ListItem, Image, Text, Box, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  
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
                src={getCroppedImageUrl(genre.background_image)}
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