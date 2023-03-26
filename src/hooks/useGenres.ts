import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");

  const [isLoading, setLoading] = useState(false);

  const fetchGenres = async (controller: AbortController) => {
    setLoading(true);
    try {
      const { data } = await apiClient.get<FetchGenresResponse>("/genres", {
        signal: controller.signal,
      });
      setGenres(data.results);
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

  return { genres, error, isLoading };
};

export default useGenres;
