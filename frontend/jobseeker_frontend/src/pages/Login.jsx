import { useState } from "react";
import { Mail, Lock, ArrowRight, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import AscendNevara from "../assets/AscendNevara-cut.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response =  await fetch("http://localhost:8000/api/accounts/login/", {
        method: "POST",
        headers: {
    
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
        }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error("Login failed:", data);
          alert("Login failed: " + (data.detail || "Unknown error"));
          return;
        }

        console.log("Login:", data);
        localStorage.setItem("accessToken", data.access || data.access_token);
        localStorage.setItem("refreshToken", data.refresh || data.refresh_token);
        navigate("/dashboard");
      } catch (error) {
        console.error("Login error:", error);
      }
    }
        

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--background)] p-4">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--primary)]/5 via-[var(--background)] to-[var(--secondary)]/5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(74,127,167,0.1),transparent_50%)]" />

      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mb-6 flex items-start justify-center gap-1">
                <img
                  src={AscendNevara}
                  alt="Nevara Ascend logo"
                  className="h-10 w-auto"
                />

                <span className="text-xs font-semibold uppercase text-[var(--primary)]">
                  Beta
                </span>
              </div>

          <h1 className="mb-2 text-3xl font-bold text-[var(--primary)]">
            Welcome back
          </h1>

          <p className="text-[var(--foreground)]/70">
            Sign in to continue to your account
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--border)] bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--primary)]"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--foreground)]/40" />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-[var(--border)] bg-white py-3 pl-10 pr-4 transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-[var(--primary)]"
              >
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--foreground)]/40" />

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-[var(--border)] bg-white py-3 pl-10 pr-4 transition-all focus:border-[var(--primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]/20"
                />

                <span className="text-sm text-[var(--foreground)]/70">
                  Remember me
                </span>
              </label>

              <a href="#" className="text-sm text-[var(--primary)] hover:underline">
                Forgot password?
              </a>
              */}
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--primary)] py-3 font-medium text-white shadow-md transition-all hover:bg-[#143252] hover:shadow-lg"
            >
              Sign In
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-[var(--foreground)]/70">
              {/* Don&apos;t have an account?{" "}
              {/*}
              <Link
                to="/signup"
                className="font-medium text-[var(--primary)] hover:underline"
              >
                Sign up for free
              </Link>
              {*/}
              Additional beta invitations coming soon.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-[var(--foreground)]/60 transition-colors hover:text-[var(--primary)]"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;