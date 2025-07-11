"use client";

interface ToastProps {
  message: string;
}

export default function Toast({ message }: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded shadow-lg animate-bounce z-50">
      {message}
    </div>
  );
}
