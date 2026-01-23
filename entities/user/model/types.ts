import type { User as FirebaseUser } from "firebase/auth";

export interface UserProfile {
  id: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  created: Date;
  updated: Date;
}

export interface User extends FirebaseUser {
  profile?: UserProfile;
}
