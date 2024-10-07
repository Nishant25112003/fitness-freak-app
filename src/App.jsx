import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Classes from './components/Classes';
import Navbar from './components/Navbar'; // Include your Navbar component
import AppInfo from './components/AppInfo';



function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <AppInfo/>
      <Footer />
      
    </Router>
  );
}

export default App
