import {
  signInWithGoogle,
  signInWithEmail,
  signUpWithEmail,
  onAuthStateChanged,
} from "entities/user";
import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router";
import { Button, Input } from "@headlessui/react";
import clsx from "clsx";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((user) => {
      if (user) {
        navigate("/", { replace: true });
      }
    });

    return unsubscribe;
  }, [navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
        await signInWithEmail(email, password);
      } else {
        await signInWithEmail(email, password);
      }
    } catch (err: any) {
      console.error("Auth error:", JSON.stringify(err));
      setError(err.code || "Authentication error");
      setPassword("")
      setLoading(false);
    }
  };

  const handleSignInWithGoogle = async () => {
    setLoading(true);
    setError("");

    try {
      await signInWithGoogle();
    } catch (err: any) {
      console.error("Auth error:", JSON.stringify(err));
      setError(err.code || "Authentication error");
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center items-center min-h-dvh text-neutral-50">
      <div className="bg-neutral-800 border-2 border-neutral-700 rounded p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={clsx(
                "w-full p-3 bg-neutral-700 border-2 border-neutral-600 rounded text-neutral-50 outline-0",
                "placeholder:text-neutral-400",
                "focus:border-neutral-500 transition-colors duration-200",
              )}
              placeholder="your@email.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={clsx(
                "w-full p-3 bg-neutral-700 border-2 border-neutral-600 rounded text-neutral-50 outline-0",
                "placeholder:text-neutral-400",
                "focus:border-neutral-500 transition-colors duration-200",
              )}
              placeholder="p@ssw0rd_ex3mple"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <p className="text-amber-600 text-sm text-center">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className={clsx(
              "w-full transition-colors duration-200 ease-in px-3 py-2",
              "bg-neutral-700 text-neutral-50 rounded border-2 border-transparent",
              "hover:bg-neutral-600 hover:text-neutral-200",
              "active:border-neutral-600 active:bg-neutral-800",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            {loading
              ? isSignUp
                ? "Creating account..."
                : "Signing in..."
              : isSignUp
                ? "Sign Up"
                : "Sign In"}
          </Button>

          <div className="relative flex items-center gap-2">
            <hr className="flex-1 border-neutral-600" />
            <span className="text-sm text-neutral-400">or</span>
            <hr className="flex-1 border-neutral-600" />
          </div>

          <Button
            type="button"
            onClick={handleSignInWithGoogle}
            disabled={loading}
            className={clsx(
              "w-full transition-colors duration-200 ease-in px-3 py-2",
              "bg-neutral-700 text-neutral-50 rounded border-2 border-transparent",
              "hover:bg-neutral-600 hover:text-neutral-200",
              "active:border-neutral-600 active:bg-neutral-800",
              "disabled:opacity-50 disabled:cursor-not-allowed",
            )}
          >
            Sign in with Google
          </Button>

          <p className="text-center text-sm text-neutral-400">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
              disabled={loading}
              className="text-neutral-200 hover:text-neutral-50 underline transition-colors duration-200 disabled:opacity-50"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
