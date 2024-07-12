interface CardParams {
  title: string;
  items: string[];
}

export function Card({ title, items }: CardParams) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <ul className="list-disc list-inside text-lg text-gray-600 text-left px-6">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
