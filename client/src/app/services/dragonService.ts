import { API_URL } from "../config";

export const fetchDragons = async (): Promise<Dragon[]> =>
  (await fetch(`${API_URL}/allDragons`, { method: "get" })).json();
