import type React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeProvider } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jonathan Gong",
  description: "Jonathan Gong's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="font-bold">
                  <span className="bg-gradient-to-r from-palette-blue via-palette-lightBlue to-palette-blueGray bg-clip-text text-transparent">
                    Jonathan Gong
                  </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Home
                  </Link>
                  <Link
                    href="/experience"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Experience
                  </Link>
                  <Link
                    href="/projects"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/blog"
                    className="text-sm font-medium transition-colors hover:text-primary"
                  >
                    Blog
                  </Link>
                  <Button asChild>
                    <Link href="mailto:jonathangong2005@gmail.com">
                      Contact
                    </Link>
                  </Button>
                </nav>
                <Sheet>
                  <SheetTrigger asChild className="md:hidden">
                    <Button variant="outline" size="icon">
                      <Menu className="h-5 w-2" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Menu</SheetTitle>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-8">
                      <Link
                        href="/"
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        Home
                      </Link>
                      <Link
                        href="/experience"
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        Experience
                      </Link>
                      <Link
                        href="/projects"
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        Projects
                      </Link>
                      <Link
                        href="/blog"
                        className="text-sm font-medium transition-colors hover:text-primary"
                      >
                        Blog
                      </Link>
                      <div className="w-fit">
                        <Button asChild size="sm">
                          <Link href="mailto:jonathangong2005@gmail.com">
                            Contact
                          </Link>
                        </Button>
                      </div>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="border-t py-6 text-center">
              <div className="container flex flex-col items-center justify-center gap-4">
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Jonathan Gong. All rights
                  reserved.
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
