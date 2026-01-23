import { useEffect, useState } from "react";
import { onAuthStateChange } from "../index";
import type { User } from "firebase/auth";

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange((authUser: User) => {
      setUser(authUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading };
}
