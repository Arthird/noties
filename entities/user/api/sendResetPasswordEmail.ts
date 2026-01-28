import { sendPasswordResetEmail as firebaseSendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../shared/api/auth/auth";

export async function sendPasswordResetEmail(email: string): Promise<void> {
  await firebaseSendPasswordResetEmail(auth, email);
}
