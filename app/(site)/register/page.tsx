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

// Read Cloudinary config from env (must start with NEXT_PUBLIC_)
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

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
  const [avatarUploading, setAvatarUploading] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Profile image must be less than 5MB");
      return;
    }
    
    setAvatarFile(file);
    const previewUrl = URL.createObjectURL(file);
    setAvatarPreview(previewUrl);
    setError(null);
  };

  const uploadAvatarToCloudinary = async (): Promise<string | null> => {
    if (!avatarFile) return null;
    if (!CLOUD_NAME || !UPLOAD_PRESET) {
      console.warn("Missing Cloudinary env vars - skipping avatar upload");
      return null;
    }

    setAvatarUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", avatarFile);
      formData.append("upload_preset", UPLOAD_PRESET);

      console.log("📤 Uploading to Cloudinary...");
      
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData
        }
      );

      const data = await res.json();
      console.log("📥 Cloudinary response:", data);
      
      if (!res.ok) {
        console.error("Cloudinary upload error:", data);
        return null;
      }

      return data.secure_url as string;
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      return null;
    } finally {
      setAvatarUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    console.log("🚀 Form submitted");

    // Trim inputs
    const trimmedFullName = fullName.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedStudentType = studentType.trim();
    const trimmedProgram = program.trim();

    console.log("📋 Form data:", {
      fullName: trimmedFullName,
      email: trimmedEmail,
      passwordLength: password.length,
      studentType: trimmedStudentType,
      program: trimmedProgram,
      hasAvatar: !!avatarFile
    });

    if (!trimmedFullName || !trimmedEmail || !password || !trimmedStudentType || !trimmedProgram) {
      const errorMsg = "Full name, email, password, student type, and program are required.";
      console.error("❌ Validation error:", errorMsg);
      setError(errorMsg);
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      const errorMsg = "Please enter a valid email address.";
      console.error("❌ Email validation error:", errorMsg);
      setError(errorMsg);
      return;
    }

    if (password.length < 8) {
      const errorMsg = "Password must be at least 8 characters long.";
      console.error("❌ Password validation error:", errorMsg);
      setError(errorMsg);
      return;
    }

    if (password !== confirmPassword) {
      const errorMsg = "Passwords do not match.";
      console.error("❌ Password mismatch error:", errorMsg);
      setError(errorMsg);
      return;
    }

    setLoading(true);
    console.log("⏳ Starting registration process...");

    try {
      // 1) Upload avatar if selected
      let avatarUrl: string | null = null;
      if (avatarFile) {
        console.log("🖼️ Uploading avatar...");
        avatarUrl = await uploadAvatarToCloudinary();
        console.log("✅ Avatar upload result:", avatarUrl ? "Success" : "Failed/Skipped");
      }

      // 2) Call register API
      const apiUrl = "/api/auth/register";
      const requestBody = {
        fullName: trimmedFullName,
        email: trimmedEmail,
        password,
        studentType: trimmedStudentType,
        program: trimmedProgram,
        avatarUrl
      };

      console.log("📤 Sending request to:", apiUrl);
      console.log("📦 Request body:", JSON.stringify(requestBody, null, 2));

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });

      console.log("📥 Response status:", res.status);
      console.log("📥 Response headers:", Object.fromEntries(res.headers.entries()));
      
      let data;
      try {
        data = await res.json();
        console.log("📥 Response data:", data);
      } catch (parseError) {
        console.error("❌ Failed to parse response as JSON");
        const textResponse = await res.text();
        console.log("📥 Raw response:", textResponse);
        throw new Error("Server returned invalid JSON");
      }
      
      if (!res.ok) {
        console.error("❌ API error response:", data);
        throw new Error(data.error || `Registration failed (${res.status})`);
      }

      // 3) Success handling
      console.log("✅ Registration successful:", data);
      
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
        console.log("🔄 Redirecting to login...");
        router.push("/login");
      }, 2000);
      
    } catch (err: any) {
      console.error("❌ Registration catch error:", err);
      console.error("❌ Error details:", {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      
      // Set error message
      const errorMsg = err.message || "Registration failed. Please try again.";
      setError(errorMsg);
      
    } finally {
      console.log("🏁 Registration process complete");
      setLoading(false);
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
        noValidate
      >
        {/* Debug info */}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 text-xs">
          <p className="font-semibold text-blue-800">Debug Info:</p>
          <p>CLOUD_NAME: {CLOUD_NAME ? "✅ Set" : "❌ Missing"}</p>
          <p>UPLOAD_PRESET: {UPLOAD_PRESET ? "✅ Set" : "❌ Missing"}</p>
          <p>Status: {loading ? "⏳ Loading..." : "✅ Ready"}</p>
        </div>

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
            IIT email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            placeholder="you@hawk.iit.edu"
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

        {/* Avatar upload */}
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
                Square images work best (e.g., 400x400). Max 5MB.
              </p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || avatarUploading}
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
      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs">
        <h3 className="font-semibold text-slate-700">Debug Console:</h3>
        <p className="mt-1 text-slate-600">Open browser console (F12) to see detailed logs</p>
        <button
          onClick={() => {
            console.log("🧪 Test button clicked");
            console.log("Current state:", {
              fullName, email, password, studentType, program,
              hasAvatar: !!avatarFile
            });
          }}
          className="mt-2 rounded border border-slate-300 bg-white px-2 py-1 text-xs hover:bg-slate-50"
        >
          Log Current State
        </button>
      </div>
    </div>
  );
}