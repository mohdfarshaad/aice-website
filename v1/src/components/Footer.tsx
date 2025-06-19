const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <span className="text-xl font-bold">AICE</span>
              <p className="text-sm text-gray-400">
                Association of Innovative Computer Engineers
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              Computer Engineering Department
            </p>
            <p className="text-gray-400">Majlis Polytechnic College</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AICE. Building the future of computer engineering education.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;