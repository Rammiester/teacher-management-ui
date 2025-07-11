"use client";
import { useState } from "react";
import Toast from "./Toast"; // ✅ make sure Toast.tsx exists

interface AddTeacherModalProps {
  onClose: () => void;
  onSubmit: (teacher: {
    name: string;
    email: string;
    phone: string;
    qualifications: string[];
  }) => void;
}

export default function AddTeacherModal({
  onClose,
  onSubmit,
}: AddTeacherModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualifications, setQualifications] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setError("All fields are required.");
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      onSubmit({
        name,
        email,
        phone,
        qualifications: qualifications
          .split(",")
          .map((q) => q.trim())
          .filter(Boolean),
      });
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose(); // ✅ Close modal after success
      }, 2000);
    }, 1200);
  };

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            ✖
          </button>

          {/* Modal Title */}
          <h2 className="text-xl font-semibold mb-4">Add New Teacher</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
                placeholder="+91 9876543210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">
                Qualifications (comma separated)
              </label>
              <input
                type="text"
                value={qualifications}
                onChange={(e) => setQualifications(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
                placeholder="B.Ed, M.Sc Physics"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-2 rounded hover:scale-105 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Adding Teacher..." : "Add Teacher"}
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {success && <Toast message="🎉 Teacher added successfully!" />}
    </>
  );
}
