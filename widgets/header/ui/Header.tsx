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
    <div className="flex flex-col w-full text-neutral-50">
      <header className="flex w-full max-w-6xl px-2 p-1 mx-auto items-center justify-between">
        <h1 className="text-3xl font-bold text-neutral-50 ">
          Not<span className="text-amber-500">i</span>es
        </h1>
        <button
          onClick={handleSignOut}
          disabled={isSigningOut}
          className="w-7 h-7 disabled:opacity-50"
        >
          <img src="Logout.svg" alt="Logout" />
        </button>
      </header>
      <hr className="border border-neutral-700 mb-2" />
    </div>
  );
}
