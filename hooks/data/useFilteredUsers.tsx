import { useEffect, useMemo, useRef } from "react";
import { User } from "../../types/user";

/**
 * Filter Users list based on filter and cache results
 */
export function useFilteredUsers(list: User[], filter: string): User[] {
  const cache = useRef(new Map());

  useEffect(() => {
    // invalidate cache when list changes
    cache.current = new Map();
  }, [list]);

  const filteredUsers = useMemo(() => {
    if (!filter) return list;
    if (cache.current && cache.current.has(filter)) {
      return cache.current.get(filter);
    }

    const lowercasedFilter = filter.toLowerCase();

    const result = list.filter(user =>
      user.name.toLowerCase().includes(lowercasedFilter)
    );

    if (cache.current) {
      cache.current.set(filter, result);
    }

    return result;
  }, [list, filter, cache.current]);

  return filteredUsers;
}
