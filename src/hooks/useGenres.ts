import useData from "./useData";
import { Genre } from "./types";

const useGenres = () => {
  return useData<Genre>("/genres");
};

export default useGenres;