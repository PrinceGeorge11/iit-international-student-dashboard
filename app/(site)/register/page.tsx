"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const STUDENT_TYPES = [
  "Undergraduate",
  "Graduate",
  "Exchange",
  "Visiting Scholar",
  "Other"
];

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [studentType, setStudentType] = useState("");
  const [program, setProgram] = useState("");

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string>("");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
      setError("Profile image must be less than 5MB");
      return;
    }
    
    setAvatarFile(file);
    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setDebugInfo("");

    // Trim inputs
    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedStudentType = studentType.trim();
    const trimmedProgram = program.trim();

    if (!trimmedFullName || !trimmedEmail || !password || !trimmedStudentType || !trimmedProgram) {
      setError("Full name, email, password, student type, and program are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // Skip avatar upload for now to simplify debugging
      const avatarUrl = null;

      // Log the request
      const requestBody = {
        fullName: trimmedFullName,
        email: trimmedEmail,
        password,
        studentType: trimmedStudentType,
        program: trimmedProgram,
        avatarUrl
      };
      
      console.log("📤 Sending request to /api/auth/register");
      console.log("📦 Request body:", requestBody);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      // Get the raw response text first
      const rawResponse = await res.text();
      console.log("📥 Raw response:", rawResponse);
      console.log("📥 Response status:", res.status);
      
      // Update debug info
      setDebugInfo(`Status: ${res.status}\nResponse: ${rawResponse.substring(0, 200)}...`);

      let responseData;
      try {
        // Try to parse as JSON
        responseData = JSON.parse(rawResponse);
        console.log("✅ Parsed JSON response:", responseData);
      } catch (jsonError) {
        console.error("❌ Failed to parse JSON:", jsonError);
        console.error("Raw response was:", rawResponse);
        
        // Check for common HTML error pages
        if (rawResponse.includes("<!DOCTYPE html>") || rawResponse.includes("<html")) {
          throw new Error("Server returned an HTML page instead of JSON. This usually means the API route is not working correctly.");
        } else if (rawResponse.includes("Internal Server Error")) {
          throw new Error("Server experienced an internal error. Check the server logs.");
        } else if (res.status === 404) {
          throw new Error("API endpoint not found (404). Make sure /api/auth/register exists.");
        } else if (res.status === 500) {
          throw new Error("Server error (500). Check your API route implementation.");
        } else {
          throw new Error(`Server returned: ${rawResponse.substring(0, 100)}`);
        }
      }

      // Check response status
      if (!res.ok) {
        const errorMessage = responseData?.error || 
                            responseData?.message || 
                            `Registration failed (${res.status})`;
        throw new Error(errorMessage);
      }

      // Success handling
      if (responseData.message === "Registration successful") {
        // Clear form
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setStudentType("");
        setProgram("");
        setAvatarFile(null);
        setAvatarPreview(null);
        
        // Show success message
        setError("✅ Registration successful! Redirecting to login...");
        
        // Redirect after delay
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } else {
        throw new Error("Unexpected response from server.");
      }
      
    } catch (err: any) {
      console.error("Registration error:", err);
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Test endpoint function
  const testApiEndpoint = async () => {
    setDebugInfo("Testing API endpoint...");
    
    try {
      // First test if the API endpoint exists
      const testRes = await fetch("/api/auth/register", {
        method: "OPTIONS"
      });
      
      setDebugInfo(prev => prev + `\nOPTIONS status: ${testRes.status}`);
      
      // Test with a minimal request
      const testBody = {
        fullName: "Test User",
        email: `test${Date.now()}@example.com`,
        password: "Test123456",
        studentType: "Undergraduate",
        program: "Computer Science",
        avatarUrl: null
      };
      
      console.log("🧪 Testing API with:", testBody);
      
      const testPostRes = await fetch("/api/auth/register", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(testBody)
      });
      
      const rawText = await testPostRes.text();
      setDebugInfo(prev => prev + `\nPOST status: ${testPostRes.status}\nResponse: ${rawText.substring(0, 300)}`);
      
    } catch (testErr: any) {
      setDebugInfo(prev => prev + `\nTest error: ${testErr.message}`);
      console.error("Test error:", testErr);
    }
  };

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-8">
      <div className="mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-600">
          iStudentsHub · IIT
        </p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">
          Create your student account
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Sign up with your IIT details so we can personalize your onboarding.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 rounded-2xl bg-white p-5 shadow-sm shadow-slate-300/80"
      >
        {error && (
          <div className={`rounded-lg border px-3 py-2 text-xs ${
            error.includes("✅") || error.includes("successful") 
              ? "border-green-300 bg-green-50 text-green-700"
              : "border-red-300 bg-red-50 text-red-700"
          }`}>
            {error}
          </div>
        )}

        {/* Full name */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700">
            Full name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="Aisha Mensah"
            required
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password + Confirm */}
        <div className="grid gap-3 md:grid-cols-2">
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              placeholder="••••••••"
              minLength={8}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              Confirm password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {/* Student type */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700">
            Student type<span className="text-red-500">*</span>
          </label>
          <select
            value={studentType}
            onChange={(e) => setStudentType(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            required
          >
            <option value="">Select your student type</option>
            {STUDENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Program */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700">
            Program / Major<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="M.S. Cyber Forensics & Security"
            required
          />
        </div>

        {/* Avatar upload - Optional for now */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700">
            Profile photo (optional)
          </label>
          <div className="flex items-center gap-3">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="Avatar preview"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-red-500/60"
              />
            ) : (
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-200 text-xs text-slate-500">
                No photo
              </div>
            )}
            <div className="flex-1 text-xs text-slate-600">
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="block w-full text-xs text-slate-700 file:mr-3 file:rounded-md file:border-0 file:bg-red-600 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-red-500"
              />
              <p className="mt-1 text-[10px] text-slate-500">
                Optional - can add later
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-red-300 hover:bg-red-500 disabled:cursor-not-allowed disabled:bg-red-300"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Create account"
          )}
        </button>

        <p className="pt-1 text-center text-xs text-slate-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-red-600 hover:text-red-500"
          >
            Login
          </Link>
        </p>
      </form>

      {/* Debug section */}
      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-slate-700">Debug Panel</h3>
          <button
            onClick={testApiEndpoint}
            className="rounded border border-slate-300 bg-white px-2 py-1 text-xs hover:bg-slate-50"
          >
            Test API
          </button>
        </div>
        
        {debugInfo && (
          <div className="mt-2">
            <pre className="whitespace-pre-wrap break-words rounded bg-white p-2 text-xs text-slate-600">
              {debugInfo}
            </pre>
          </div>
        )}
        
        <div className="mt-2 text-xs text-slate-600">
          <p className="font-semibold">Troubleshooting steps:</p>
          <ol className="mt-1 list-inside list-decimal space-y-1">
            <li>Open browser console (F12)</li>
            <li>Check Network tab for the request</li>
            <li>Click "Test API" button above</li>
            <li>Check if /api/auth/register exists</li>
            <li>Check server logs for errors</li>
          </ol>
        </div>
      </div>

      {/* Quick test form */}
      <div className="mt-4 rounded-lg border border-blue-200 bg-blue-50 p-3">
        <h3 className="text-xs font-semibold text-blue-800">Quick Test</h3>
        <p className="mt-1 text-xs text-blue-600">
          Use this test data to debug:
        </p>
        <button
          onClick={() => {
            setFullName("Test User");
            setEmail(`test${Date.now()}@example.com`);
            setPassword("Test123456");
            setConfirmPassword("Test123456");
            setStudentType("Undergraduate");
            setProgram("Computer Science");
          }}
          className="mt-2 w-full rounded border border-blue-300 bg-blue-100 px-3 py-2 text-xs text-blue-700 hover:bg-blue-200"
        >
          Fill Test Data
        </button>
      </div>
    </div>
  );
}