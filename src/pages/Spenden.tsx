import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

export function Spenden() {
  const [formData, setFormData] = useState<FormData>({
    targetRegion: '',
    clothingItems: {},
    spendenoption: 'persönlich',
    abholVorname: '',
    abholNachname: '',
    abholAdresse: '',
    abholStadt: '',
    abholPLZ: ''
  });

  const navigate = useNavigate();

  const regionOptions = ['Naher Osten', 'Ukraine', 'Sudan'];
  const clothingOptions = ['Oberbekleidung', 'Hosen', 'Jacken', 'Schuhe'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleClothingChange = (e: React.ChangeEvent<HTMLInputElement>, option: string) => {
    const { checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      clothingItems: {
        ...prevState.clothingItems,
        [option]: checked ? 1 : 0
      }
    }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>, option: string) => {
    const { value } = e.target;
    const quantity = parseInt(value, 10);
    setFormData((prevState) => ({
      ...prevState,
      clothingItems: {
        ...prevState.clothingItems,
        [option]: quantity > 0 ? quantity : 0
      }
    }));
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      spendenoption: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Weiterleiten zur Bestätigungsseite mit Zustand
    navigate('/confirmation', { state: formData });
  };

  return (
    <section className="p-4">
      <h2 className="text-center font-semibold text-2xl">Kleiderspende</h2>
      <p className="text-center mt-2">Füllen Sie die folgenden Felder aus, um Ihre Spende zu registrieren:</p>
      <form className="max-w-lg mx-auto mt-8 space-y-4" onSubmit={handleSubmit}>
        <div className="radio-group flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
          <label className="basis-1/2 md:w-1/3 px-4 py-6 bg-white border-2 border-main/25 hover:border-main text-main rounded-lg text-center font-semibold transition duration-150 flex items-center justify-center cursor-pointer">
            <input
              type="radio"
              name="spendenoption"
              value="persönlich"
              checked={formData.spendenoption === 'persönlich'}
              onChange={handleOptionChange}
              className="form-checkbox cursor-pointer appearance-none checked:bg-main checked:border-transparent text-main mr-2 h-6 w-6 border-2 border-main rounded-md"
            />
            <span className="text-main basis-3/4">Abgabe bei unserer Geschäftsstelle</span>
          </label>
          <label className="basis-1/2 md:w-1/3 px-4 py-6 bg-white border-2 border-main/25 hover:border-main text-main rounded-lg text-center font-semibold transition duration-150 flex items-center justify-center cursor-pointer">
            <input
              type="radio"
              name="spendenoption"
              value="abholung"
              checked={formData.spendenoption === 'abholung'}
              onChange={handleOptionChange}
              className="form-checkbox cursor-pointer appearance-none checked:bg-main checked:border-transparent text-main mr-2 h-6 w-6 border-2 border-main rounded-md"
            />
            <span className="text-main basis-3/4">Abholung durch TextilTribut</span>
          </label>
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Zielkrisengebiet</label>
          <select
            name="targetRegion"
            value={formData.targetRegion}
            onChange={handleInputChange}
            className="w-full px-4 py-2 cursor-pointer rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent border-2 border-main/25 hover:border-main"
            required
          >
            <option value="">Bitte wählen</option>
            {regionOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-2">Art der Kleidung</label>
          <div className="space-y-2">
            {clothingOptions.map(option => (
              <div key={option} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    id={`checkbox-${option}`}
                    checked={!!formData.clothingItems[option]}
                    onChange={(e) => handleClothingChange(e, option)}
                    className="appearance-none h-6 w-6 cursor-pointer border-none focus:outline-none bg-gray-200 rounded-md checked:bg-main checked:border-transparent"
                  />
                  <label htmlFor={`checkbox-${option}`} className="text-gray-700">{option}</label>
                </div>
                <input
                  type="number"
                  min="0"
                  value={formData.clothingItems[option] || 0}
                  onChange={(e) => handleQuantityChange(e, option)}
                  className="w-20 px-2 py-1 rounded-lg focus:outline-none focus:ring-none border-2 border-main/25 hover:border-main"
                />
              </div>
            ))}
          </div>
        </div>
        {formData.spendenoption === 'abholung' && (
          <div className="mt-4">
            <label className="block font-semibold text-gray-700">Abholadresse</label>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="w-full md:w-1/2">
                <label className="text-gray-700">Vorname</label>
                <input
                  type="text"
                  name="abholVorname"
                  value={formData.abholVorname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-none border-2 border-main/25 hover:border-main"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="text-gray-700">Nachname</label>
                <input
                  type="text"
                  name="abholNachname"
                  value={formData.abholNachname}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-none border-2 border-main/25 hover:border-main"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-gray-700">Straße</label>
              <input
                type="text"
                name="abholAdresse"
                value={formData.abholAdresse}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-none border-2 border-main/25 hover:border-main"
                required
              />
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <div className="w-full md:w-1/2">
                <label className="text-gray-700">Stadt</label>
                <input
                  type="text"
                  name="abholStadt"
                  value={formData.abholStadt}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-none border-2 border-main/25 hover:border-main"
                  required
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="text-gray-700">Postleitzahl</label>
                <input
                  type="text"
                  name="abholPLZ"
                  value={formData.abholPLZ}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-none border-2 border-main/25 hover:border-main"
                  required
                />
              </div>
            </div>
          </div>
        )}
        <button type="submit" className="w-full bg-main text-white mt-2 px-4 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-main/50 transition duration-150">
          Spende registrieren
        </button>
      </form>
    </section>
  );
}
