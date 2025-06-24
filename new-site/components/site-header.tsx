"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Github, Youtube, ChevronDown, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function TopHeader() {
  return (
      <div className="bg-slate-600 text-white py-2 px-4">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm">jweiland@firstillinoisrobotics.org</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="https://github.com/Virtual-FTC" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 hover:text-blue-300 transition-colors" />
            </Link>
            <Link
                href="https://www.youtube.com/channel/UCyoM0SgNYmSvSb3h7YodOOg"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Youtube className="h-4 w-4 hover:text-red-300 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
  )
}

export function SiteLogo() {
  return (
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-blue-500">V</span>
            <span className="bg-orange-500 text-white px-1 rounded">R</span>
            <span className="text-red-500">S</span>
          </div>
        </div>
        <div className="text-sm text-gray-600 hidden md:block">Program FTC robots without the hardware</div>
      </div>
  )
}

export function MainNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
      <>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
              href="/"
              className={cn(
                  "font-medium transition-colors",
                  pathname === "/" ? "text-teal-500" : "text-gray-700 hover:text-teal-500",
              )}
          >
            Home
          </Link>
          <Link
              href="/quickstart"
              className={cn(
                  "font-medium transition-colors",
                  pathname === "/quickstart" ? "text-teal-500" : "text-gray-700 hover:text-teal-500",
              )}
          >
            Quickstart
          </Link>
          <Link
              href="/get-vrs"
              className={cn(
                  "font-medium transition-colors",
                  pathname === "/get-vrs" ? "text-teal-500" : "text-gray-700 hover:text-teal-500",
              )}
          >
            Get VRS
          </Link>

          {/* Tutorials - Now a direct link */}
          <Link
              href="/tutorials"
              className={cn(
                  "font-medium transition-colors",
                  pathname === "/tutorials" ? "text-teal-500" : "text-gray-700 hover:text-teal-500",
              )}
          >
            Tutorials
          </Link>

          {/* About Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                  variant="ghost"
                  className="p-0 h-auto font-normal flex items-center gap-1 text-gray-700 hover:text-teal-500 transition-colors"
              >
                <span>About</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/our-team">Our Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/vrs-in-the-news">VRS in the news</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact-us">Contact Us</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
              href="https://sim.vrobotsim.online/homepage.html"
              className="text-gray-700 hover:text-teal-500 transition-colors"
          >
            In The Deep
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            <Menu className="h-6 w-6" />
          </Button>

          <div
              className={cn(
                  "fixed inset-0 top-[65px] z-50 bg-white p-6 shadow-lg transition-transform duration-300",
                  open ? "translate-x-0" : "translate-x-full",
              )}
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-lg font-medium">
                Home
              </Link>
              <Link href="/quickstart" className="text-lg">
                Quickstart
              </Link>
              <Link href="/get-vrs" className="text-lg">
                Get VRS
              </Link>
              <Link href="/tutorials" className="text-lg">
                Tutorials
              </Link>
              <div className="py-2 border-t border-gray-100">
                <p className="text-sm text-gray-500 mb-2">About</p>
                <div className="flex flex-col space-y-2 pl-2">
                  <Link href="/our-team" className="text-lg">
                    Our Team
                  </Link>
                  <Link href="/vrs-in-the-news" className="text-lg">
                    VRS in the news
                  </Link>
                  <Link href="/contact-us" className="text-lg">
                    Contact Us
                  </Link>
                </div>
              </div>
              <Link href="https://sim.vrobotsim.online/homepage.html" className="text-lg">
                In The Deep
              </Link>
            </div>
          </div>
        </div>
      </>
  )
}

export function SiteHeader() {
  return (
      <header>
        <TopHeader />
        <div className="bg-white border-b">
          <div className="container py-4">
            <div className="flex justify-between items-center">
              <SiteLogo />
              <MainNav />
            </div>
          </div>
        </div>
      </header>
  )
}
