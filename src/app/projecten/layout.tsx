import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projecten & Portfolio - BWS Schoonmaak",
  description: "Bekijk onze projecten en succesverhalen. Van kantoorgebouwen tot ziekenhuizen - BWS Schoonmaak heeft bewezen expertise in diverse sectoren.",
  openGraph: {
    title: "Projecten & Portfolio - BWS Schoonmaak",
    description: "Bekijk onze projecten en succesverhalen. Van kantoorgebouwen tot ziekenhuizen - BWS Schoonmaak heeft bewezen expertise in diverse sectoren.",
    images: [{ url: "/og-projecten.jpg" }],
  },
};

export default function ProjectenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
