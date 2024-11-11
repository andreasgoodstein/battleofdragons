import { QueryClient } from "@tanstack/react-query";

export {
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const Client = new QueryClient();
