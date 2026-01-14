import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin Carl C. Reyes | System Administrator (Remote)",
  description:
    "System Administrator portfolio — virtualization, migrations, networking, security, monitoring, documentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
