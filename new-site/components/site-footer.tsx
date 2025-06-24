import Link from "next/link"
import { Mail, Github, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Virtual Robot Simulator</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Virtual Robot Simulator is a simple, easy-to-use platform that allows FTC teams to program and test their
              robots without access to physical hardware.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-300">jweiland@firstillinoisrobotics.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span className="text-gray-300">https://github.com/Virtual-FTC </span>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex gap-4">
              <Link href="https://github.com/Virtual-FTC" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 hover:text-blue-300 transition-colors" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCyoM0SgNYmSvSb3h7YodOOg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="h-6 w-6 hover:text-red-300 transition-colors" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© Copyright 2025 Virtual Robot Simulator. Powered by Next.js.</p>
        </div>
      </div>
    </footer>
  )
}

