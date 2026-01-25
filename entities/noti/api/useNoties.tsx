import { useState, useEffect } from "react";
import { db } from "shared/api/db/db";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import type { Noti, NotiOwnerId, NotiDTO } from "../model/types";
import { dtoToNoti } from "../lib/convertors";

export function useNoties(ownerId?: NotiOwnerId) {
  const [noties, setNoties] = useState<Noti[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!ownerId) {
      setLoading(false);
      return;
    }
    const colRef = collection(db, "users", ownerId, "noties");
    const q = query(colRef, orderBy("created", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => {
          const data = doc.data() as NotiDTO;
          return dtoToNoti(data);
        });

        setNoties(items);
        setLoading(false);
      },
      (err) => {
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [ownerId]);

  return { noties, loading, error };
}
