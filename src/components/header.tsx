import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sticky top-0 z-50 py-4 mb-8 bg-white md:px-8 px-4 shadow-md">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img className="w-10 h-10 rounded-full" src="../logo192.png" alt="Logo" />
          <h1 className="ml-4 font-bold text-2xl">TextilTribut</h1>
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-main"
        >
          <span className="sr-only">Menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`absolute top-full right-0 w-1/2 md:relative md:top-0 md:left-auto md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white shadow-md mx-4 md:shadow-none md:mx-none">
            <li>
              <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:text-main hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Startseite</a>
            </li>
            <li>
              <a href="/spenden" className="block py-2 px-3 text-gray-900 rounded hover:text-main hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0">Spenden</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
