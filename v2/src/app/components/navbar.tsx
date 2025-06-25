import Link from "next/link";
import { Calendar, HomeIcon, Image, Users } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-blue-800  text-white  shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-16">
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
                className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <HomeIcon size={16} />
                Home
              </Link>
              <Link
                href="/events"
                className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Calendar size={16} />
                Events
              </Link>
              <Link
                href="/members"
                className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Users size={16} />
                Members
              </Link>
              <Link
                href="/gallery"
                className="hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
              >
                <Image size={16} />
                Gallery
              </Link>
            </div>
          </div>

          {/* Auth Buttons
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium"
            >
              Sign Up
            </Link>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
