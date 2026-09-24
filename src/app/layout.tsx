import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Opsly — Simple operations. Smarter businesses.",
  description:
    "An AI-powered workspace that helps growing businesses simplify operations and make smarter decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
