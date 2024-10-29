import "@/app/ui/global.css";
import { inter } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "This dashboard is made by Parv gugnani, built with App Router.",
  metadataBase: new URL("https://parv-gugnani.github.io/Parv-gugnani/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="{`${inter.className} antialiased`}">{children}</body>
    </html>
  );
}
