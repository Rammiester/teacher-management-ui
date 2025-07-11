import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex bg-gray-50 text-gray-800">
        {/* Sidebar stays persistent */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col h-screen overflow-y-auto">
          {/* Top navbar */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
