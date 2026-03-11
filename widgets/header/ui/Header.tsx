import { useState } from "react";
import { signOut } from "entities/user";

export default function Header() {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch (error) {
      console.error("Sign out failed:", error);
      setIsSigningOut(false);
    }
  };

  return (
    <div className="color-text-primary flex w-full flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between p-1 sm:px-4">
        <h1 className="color-text-primary text-3xl font-bold">
          Not<span className="color-accent-text">i</span>es
        </h1>
        <button
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="h-7 w-7 disabled:opacity-50"
        >
          <img src="Logout.svg" alt="Logout" />
        </button>
      </header>
      <hr className="color-hr-primary mb-2 border" />
    </div>
  );
}
