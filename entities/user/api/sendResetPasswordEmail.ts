import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../shared/api/auth/auth";

export async function sendResetPasswordEmail(email: string): Promise<void> {
  await sendPasswordResetEmail(auth, email);
}
