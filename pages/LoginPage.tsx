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
      setPassword("");
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
    <main className="color-text-primary flex min-h-dvh items-center justify-center">
      <div className="color-border-primary color-bg-primary w-full max-w-md rounded border-2 p-8">
        <h1 className="mb-6 text-center text-2xl font-bold">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-neutral"
              placeholder="your@email.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-neutral"
              placeholder="p@ssw0rd_ex3mple"
              required
              disabled={loading}
            />
          </div>

          {error && (
            <p className="color-accent-error text-center text-sm">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className={clsx(
              "button-neutral",
              "w-full px-3 py-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
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
            <hr className="color-hr-secondary flex-1" />
            <span className="color-text-tertiary text-sm">or</span>
            <hr className="color-hr-secondary flex-1" />
          </div>

          <Button
            type="button"
            onClick={handleSignInWithGoogle}
            disabled={loading}
            className={clsx(
              "button-neutral",
              "w-full px-3 py-2",
              "disabled:cursor-not-allowed disabled:opacity-50",
            )}
          >
            Sign in with Google
          </Button>

          <p className="color-text-tertiary text-center text-sm">
            {isSignUp ? "Already have an account? " : "Don't have an account? "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
              disabled={loading}
              className="color-text-secondary color-text-tertiary-hover underline transition-colors duration-200 disabled:opacity-50"
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </form>
      </div>
    </main>
  );
}
