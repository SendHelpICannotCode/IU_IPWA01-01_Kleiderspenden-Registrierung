import { useLocation } from 'react-router-dom';

interface FormData {
  targetRegion: string;
  clothingItems: { [key: string]: number };
  spendenoption: string;
  abholVorname?: string;
  abholNachname?: string;
  abholAdresse?: string;
  abholStadt?: string;
  abholPLZ?: string;
}

export function Confirmation() {
  const location = useLocation();
  const formData = location.state as FormData;

  return (
    <section className="p-4">
      <h2 className="text-center font-semibold text-2xl">Spendenbestätigung</h2>
      <p className="text-center mt-2">Vielen Dank für Ihre Spende! Hier sind die Details:</p>
      <div className="max-w-lg mx-auto mt-8 space-y-4">
        <div>
          <h3 className="font-semibold">Zielkrisengebiet:</h3>
          <p>{formData.targetRegion}</p>
        </div>
        <div>
          <h3 className="font-semibold">Art der Kleidung:</h3>
          <ul>
            {Object.entries(formData.clothingItems).map(([key, value]) => (
              value > 0 && (
                <li key={key}>
                  {key}: {value}
                </li>
              )
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Spendenoption:</h3>
          <p>{formData.spendenoption}</p>
        </div>
        {formData.spendenoption === 'abholung' && (
          <div>
            <h3 className="font-semibold">Abholadresse:</h3>
            <p>{formData.abholVorname} {formData.abholNachname}</p>
            <p>{formData.abholAdresse}</p>
            <p>{formData.abholStadt}, {formData.abholPLZ}</p>
          </div>
        )}
      </div>
    </section>
  );
}
