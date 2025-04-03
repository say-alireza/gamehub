import { Platform } from "./types";
import useData from "./useData";

const UsePlatforms = () =>useData<Platform>("/platforms/lists/parents")

export default UsePlatforms