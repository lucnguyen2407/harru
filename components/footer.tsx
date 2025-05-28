import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-100 dark:bg-gray-900 py-6 transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold">DevPortfolio</span>
            </Link>
            <nav className="flex gap-4 md:gap-6">
              <Link
                href="#about"
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link
                href="#skills"
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4">
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4">
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-xs md:text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:example@email.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
