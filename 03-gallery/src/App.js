import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Imagen1 from './components/Imagen1';
import Imagen2 from './components/Imagen2';
import Imagen3 from './components/Imagen3';
import Imagen4 from './components/Imagen4';
import Imagen5 from './components/Imagen5';
import Imagen6 from './components/Imagen6';
import Navegacion from './components/Navegacion';

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <h1 className='text-center mt-3 mb-3'>GALLERY</h1>
    </div>
      <Routes>
        <Route path="/Imagen-1" element={<Imagen1/>} />
        <Route path="/Imagen-2" element={<Imagen2/>} />
        <Route path="/Imagen-3" element={<Imagen3/>} />
        <Route path="/Imagen-4" element={<Imagen4/>} />
        <Route path="/Imagen-5" element={<Imagen5/>} />
        <Route path="/Imagen-6" element={<Imagen6/>} />
      </Routes>
      <Navegacion />
    </BrowserRouter>
  );
}

export default App;
