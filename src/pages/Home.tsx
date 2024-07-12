import clothingOptions from '../data/clothingOptions.json';
import regionOptions from '../data/regionOptions.json';
import { Card } from '../components/card';

export function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center p-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Willkommen bei TextilTribut</h1>
        <p className="text-lg text-gray-600 mb-8">
          TextilTribut ist Ihre Anlaufstelle für die Registrierung von Kleiderspenden. Wir sorgen dafür, dass Ihre Spenden die Menschen in Krisengebieten erreichen, die sie am dringendsten benötigen.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/spenden"
            className="bg-main text-white mt-2 px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-main/50 transition duration-150"
          >
            Jetzt Spenden
          </a>
        </div>
        <div className="mt-8 w-full flex flex-col md:flex-row md:justify-around space-y-8 md:space-y-0 md:space-x-8">
          <Card title="Kleiderarten" items={clothingOptions} />
          <Card title="Krisenregionen" items={regionOptions} />
        </div>
      </div>
    </div>
  );
}
