import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import ConsultNow from './Pages/ConsultNow/ConsultNow';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/ContactUs/ContactUs';
import GeneralPhysician from './Pages/GeneralPhysician/GeneralPhysician';
import Cardiologist from './Pages/Cardiologist/Cardiologist';
import Neurologist from './Pages/Neurologist/Neurologist';
import Dermatologist from './Pages/Dermatologist/Dermatologist';
import LoginSignUp from './Pages/LoginSignUp/LoginSignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consult" element={<ConsultNow />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/specialties/general-physician" element={<GeneralPhysician />} />
          <Route path="/specialties/cardiologist" element={<Cardiologist />} />
          <Route path="/specialties/neurologist" element={<Neurologist />} />
          <Route path="/specialties/dermatologist" element={<Dermatologist />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;