import { useEffect } from "react";
import { fetchDragons } from "../services/dragonService";
import { useQuery } from "../services/serviceClient";
import { useDragonStore } from "../store/useDragonStore";

export const useAllDragons = () => {
  const { setDragonList } = useDragonStore();

  const { data, error, isLoading } = useQuery({
    queryKey: ["allDragons"],
    queryFn: fetchDragons,
  });

  useEffect(() => {
    setDragonList(data ?? []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(data)]);

  return { dragonList: data ?? [], error, isLoading };
};
