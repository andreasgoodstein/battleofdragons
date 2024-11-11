import { fetchDragons } from "../services/dragonService";
import { useQuery } from "../services/serviceClient";

export const useAllDragons = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["allDragons"],
    queryFn: fetchDragons,
  });

  return { dragonList: data ?? [], error, isLoading };
};
