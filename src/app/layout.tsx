import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Victor Soares",
  description: "Um portfólio para apresentar os projetos desenvolvidos ao longo dos anos de programação",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased my-0  max-w-100vw`}>
        {children}
      </body>
    </html>
  );
}
