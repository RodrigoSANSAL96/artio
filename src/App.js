import './App.css';
import Menu from './componentes/Menu';

import InicioPágina from './páginas/InicioPágina';
import HistoriaPágina from './páginas/HistoriaPágina';
import ImagenesPágina from './páginas/ImagenesPágina';
import ContactoPágina from './páginas/ContactoPágina';

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/inicio" element={<InicioPágina />} />
          <Route path="/historia" element={<HistoriaPágina />} />
          <Route path="/imagenes" element={<ImagenesPágina />} />
          <Route path="/contacto" element={<ContactoPágina />} />
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
