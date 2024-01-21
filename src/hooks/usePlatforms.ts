import { useQuery } from "@tanstack/react-query";
import platform from "../data/platform";
import ms from "ms";
import APIClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24h
    initialData: platform,
  });

export default usePlatforms;
