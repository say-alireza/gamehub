import useData from "./useData";
import { Game, Genre, Platform } from "./types";

const useGames = (selectedGenre:Genre|null) => {
  return useData<Game>(
    "/games",
    {
      params: {
        fields: "name,background_image,parent_platforms,metacritic,genres",
        // parent_platforms: selectedPlatformId,
        genres: selectedGenre?.id
      }
    },
    [selectedGenre?.id]
  );
};

export default useGames;