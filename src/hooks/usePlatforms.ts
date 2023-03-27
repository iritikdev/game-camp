import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchPlatformsResponse {
  count: number;
  results: Platform[];
}

const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  const fetchGenres = async (controller: AbortController) => {
    setLoading(true);
    try {
      const { data } = await apiClient.get<FetchPlatformsResponse>(
        "platforms/lists/parents",
        {
          signal: controller.signal,
        }
      );
      setPlatforms(data.results);
      setLoading(false);
    } catch (err) {
      if (err instanceof CanceledError) return;
      setError((err as Error).message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchGenres(controller);
    return () => controller.abort();
  }, []);

  return { platforms, error, isLoading };
};

export default usePlatforms;
