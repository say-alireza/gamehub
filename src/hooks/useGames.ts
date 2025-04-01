import { useEffect, useState } from "react"
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";
export interface Platform {
    id: number;
    name: string;
    slug: string;  
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic:number;
}
interface FetchGamesResponse
{
    count : number;
    results : Game[]
}
const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading,setLoading] = useState(false)
    
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        
        // Updated API call with `parent_platforms` request
        apiClient
        .get<FetchGamesResponse>("/games", {
          params: {
            // Explicitly request `parent_platforms` (or use `platforms` if needed)
            fields: "name,background_image,parent_platforms", 
            // Alternative: platforms: "1,2,3,4,5,6,7,8" (PC, PlayStation, Xbox, etc.)
          },
          signal: controller.signal,
        })
        .then((res) => {
          setGames(res.data.results)
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false)
        });
  
      return () => controller.abort();
    }, []);
  
    return { games, error  , isLoading};
  };
  
  export default useGames;