export function Header() {
  return (
    <div className="sticky top-0 z-50 py-4 mb-8 bg-white md:px-8 px-4 shadow-md">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img className="w-10 h-10 rounded-full" src="../Logo.png" alt="Logo" />
          <h1 className="ml-4 font-bold">TextilTribut</h1>
        </a>
        <div>
          <a href="/" className="px-4 py-2 rounded mr-4 hover:text-pastell">
            Home
          </a>
          <a href="/spenden" className="px-4 py-2 rounded mr-4 hover:text-pastell">
            Spenden
          </a>
          <a href="/historie" className="px-4 py-2 rounded hover:text-pastell">
            Historie
          </a>
        </div>
      </div>
    </div>
  );
}
