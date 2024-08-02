import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
  ),
  title: "Home - WILBERT BERNARDI",
  description: "Aplikasi untuk belajar Next JS",
  authors: [{ name: "Wilbert Bernardi", url: "https://github.com/wilbertFE" }],
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "Home - WILBERT BERNARDI",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello World
    </main>
  );
}
