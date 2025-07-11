"use client";
import { useState } from "react";
import Header from "../components/Header";

export default function PaymentsPage() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !cardNumber || !expiry || !cvv) {
      setError("All fields are required.");
      return;
    }
    setError(null);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen p-2 sm:p-6">
      <Header
        title="Payment Portal"
        description="Enter payment details securely using our modern interface."
      />
      <div className="w-full max-w-sm sm:max-w-md mx-auto bg-white p-3 sm:p-6 rounded-xl shadow-md border border-gray-100 mt-4">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name on Card
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
              placeholder="John Doe"
            />
          </div>
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              maxLength={16}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          {/* Expiry & CVV */}
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                maxLength={5}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
                placeholder="MM/YY"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                maxLength={3}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-300 text-base"
                placeholder="123"
              />
            </div>
          </div>
          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-lg text-base font-semibold hover:scale-105 transition"
          >
            Pay Now
          </button>
        </form>
        {/* Success Message */}
        {success && (
          <p className="mt-3 text-green-600 text-sm text-center">
            ✅ Payment submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
}
