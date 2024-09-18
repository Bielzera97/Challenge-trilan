import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rater",
  description: "Tmdb site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className="full-body">
      <body>
        {children}
      </body>
    </html>
  );
}
