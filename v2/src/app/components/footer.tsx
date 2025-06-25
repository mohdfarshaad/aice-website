// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AICE</h3>
            <p className="text-gray-300">
              Association of Innovative Computer Engineers - Empowering the
              future of technology through collaboration and innovation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/members" className="hover:text-white">
                  Members
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>Email: mjpcaice@gmail.com</p>
              <p>Phone: +91 9074348824</p>
              <p>Address: Majlis Polytechnic College Puramannur</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>
            &copy; 2025 AICE - Association of Innovative Computer Engineers. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
