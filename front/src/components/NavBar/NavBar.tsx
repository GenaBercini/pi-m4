import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <Link className="text-white hover:text-gray-300" href="/">
              Landing
            </Link>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link
                  className="text-white hover:text-gray-300"
                  href="/products"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
