"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">DevPortfolio</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white dark:bg-gray-900 p-6 transition-colors duration-300">
          <nav className="flex flex-col gap-6">
            <Link
              href="#about"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={toggleMenu}>
              About
            </Link>
            <Link
              href="#skills"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={toggleMenu}>
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={toggleMenu}>
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:underline underline-offset-4"
              onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
