import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/Home';
import { Spenden } from './pages/Spenden';
import { Confirmation } from './pages/Confirmation';
import { Impressum } from './pages/Impressum';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spenden" element={<Spenden />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
