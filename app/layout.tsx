import type { Metadata } from "next";
import { Shadows_Into_Light } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Provider } from "@/components/ui/provider";

const shadowIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-shadow-into-light",
});

export const metadata: Metadata = {
  title: "Cassyku",
  description: "Created by Aldi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn(
          "dark:bg-primary min-h-screen font-shadow-into-light",
          shadowIntoLight.variable
        )}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
