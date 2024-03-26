// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 sticky">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/"  className="text-white text-2xl font-bold">
          My Store
        </Link>
        <div>
          <Link href="/" className="text-white hover:text-gray-200 mr-4">
           Products
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
          About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
