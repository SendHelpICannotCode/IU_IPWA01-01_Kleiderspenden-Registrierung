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

  const getClothingSummary = () => {
    return Object.entries(formData.clothingItems)
      .filter(([_, value]) => value > 0)
      .map(([key, value]) => `${value}x ${key}`)
      .join(', ');
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleString();
  };

  return (
    <section className="p-4">
      <h2 className="text-center font-semibold text-2xl">Spendenbestätigung</h2>
      <div className="bg-white rounded-lg p-6 max-w-lg mx-auto mt-8 space-y-4 shadow-md shadow-green-500/40">
        <p className="text-center">Vielen Dank für Ihre Spende!<br/>Hier sind die Details:</p>
        <div role="alert" className="fade alert alert-success show">
          <div className="summary-container">
            <div className="flex justify-between">
              <dt className="font-semibold">Gewählte Art der Spende:</dt>
              <dd>{formData.spendenoption === 'persönlich' ? 'Übergabe an der Geschäftsstelle' : 'Abholung durch TextilTribut'}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-semibold">Gewähltes Krisengebiet:</dt>
              <dd>{formData.targetRegion}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="font-semibold">Art der Kleiderspende:</dt>
              <dd>{getClothingSummary()}</dd>
            </div>
            {formData.spendenoption === 'abholung' && (
              <div className="flex justify-between">
                <dt className="font-semibold">Abholadresse:</dt>
                <dd>
                  {formData.abholVorname} {formData.abholNachname}, {formData.abholAdresse}, {formData.abholStadt}, {formData.abholPLZ}
                </dd>
              </div>
            )}
          </div>
          <hr className="m-2" />
          <figcaption className="blockquote-footer text-gray-500" data-testid="submit-date">
            Übermittelt am {getCurrentDate()}
          </figcaption>
        </div>
      </div>
    </section>
  );
}
