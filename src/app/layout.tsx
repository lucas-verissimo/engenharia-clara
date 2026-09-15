import type { Metadata, Viewport } from "next";
import { publicConfig } from "@/content/config";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(publicConfig.siteUrl),
  title: "Engenharia Clara | Organização técnica antes da execução",
  description:
    "Projeto demonstrativo autoral de um site institucional responsivo para uma empresa fictícia de consultoria técnica industrial.",
  applicationName: "Engenharia Clara",
  authors: [{ name: "Lucas Veríssimo Campos dos Santos" }],
  creator: "Lucas Veríssimo Campos dos Santos",
  alternates: publicConfig.hasPublicUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Engenharia Clara",
    description: "Organização técnica antes da execução — projeto demonstrativo autoral.",
    siteName: "Engenharia Clara",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Engenharia Clara — projeto demonstrativo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engenharia Clara",
    description: "Site institucional fictício criado como projeto demonstrativo autoral.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: publicConfig.allowIndexing,
    follow: publicConfig.allowIndexing,
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f1e8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
