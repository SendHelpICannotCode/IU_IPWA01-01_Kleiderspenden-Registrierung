export function Footer() {
  return (
    <footer className="bg-neutral-500 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="/impressum" className="hover:underline">Impressum</a>
          </div>
          <div className="flex space-x-4 mb-4">
            <a 
              href="https://github.com/SendHelpICannotCode" 
              className="bg-neutral-400 p-3 rounded-lg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"/>
              </svg>
            </a>
            <a 
              href="https://github.com/SendHelpICannotCode/IU_IPWA01-01_Kleiderspenden-Registrierung" 
              className="bg-neutral-400 p-3 rounded-lg" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-code"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M7 8l-4 4l4 4"/>
                <path d="M17 8l4 4l-4 4"/>
                <path d="M14 4l-4 16"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
