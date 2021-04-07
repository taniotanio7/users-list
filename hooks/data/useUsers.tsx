import useFetch from "use-http";
import { User } from "../../types/user";

/**
 * Fetch users list from jsonplaceholder API
 */
export function useUsers() {
  return useFetch<User[]>("https://jsonplaceholder.typicode.com/users", {}, []);
}
