"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Calendar,
  HomeIcon,
  Users,
  Menu,
  X,
  GalleryHorizontal,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              AICE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <HomeIcon size={16} /> Home
              </Link>
              <Link
                href="/events"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Calendar size={16} /> Events
              </Link>
              <Link
                href="/members"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Users size={16} /> Members
              </Link>
              <Link
                href="/gallery"
                className="hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <GalleryHorizontal size={16} /> Gallery
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600"
            >
              Events
            </Link>
            <Link
              href="/members"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600"
            >
              Members
            </Link>
            <Link
              href="/gallery"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600"
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
