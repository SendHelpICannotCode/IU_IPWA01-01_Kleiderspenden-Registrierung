export function Footer() {
    return (
      <footer className="bg-neutral-500 text-white py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">TextilTribut</h3>
              <p>Gemeinsam helfen wir Menschen in Not.</p>
            </div>
            <div className="flex space-x-4">
              <a href="/textiltribut" className="hover:underline">Über uns</a>
              <a href="/impressum" className="hover:underline">Impressum</a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>&copy; {new Date().getFullYear()} TextilTribut. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    );
  }
