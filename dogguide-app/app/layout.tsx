// app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dog Guide App",
  description: "A mobile app about dog breeds around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* NAVBAR */}
        <nav className="bg-orange-500 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-white text-2xl font-extrabold">
              🐶 Dog Guide
            </h1>

            {/* Menu */}
            <div className="flex gap-4">
              <Link
                href="/"
                className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-xl font-semibold transition"
              >
                Todas
              </Link>

              <Link
                href="/notas"
                className="bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-xl font-semibold transition"
              >
                Países
              </Link>
            </div>
          </div>
        </nav>

        {/* CONTENT */}
        <main>{children}</main>
      </body>
    </html>
  );
}