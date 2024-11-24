import './App.css';
import Header from './Header';
import Home from './Home';
import About from './About';
import News from './News';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div style={{ paddingTop: '85px' }} className="flex flex-col min-h-screen">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
