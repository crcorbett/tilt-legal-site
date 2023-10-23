import "../styles/globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SiteFooter } from "@/components/SiteFooter";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: "TILT Legal",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider
          defaultTheme="system"
          enableSystem
          themes={["light", "dark", "black"]}
        >
          <div className="flex flex-col min-h-screen">
            <header className="container z-40 bg-background">
              <div className="flex items-center justify-between h-20 py-6">
                {/* <MainNav items={marketingConfig.mainNav} /> */}
                <nav>
                  <Link
                    href="/login"
                    className={cn(
                      buttonVariants({ variant: "secondary", size: "sm" }),
                      "px-4"
                    )}
                  >
                    {`Legal Tech Map 2023`}
                  </Link>
                </nav>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
