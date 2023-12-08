import logo from './logo.svg';
import './App.css';
import Bullet from './components/Bullet';
import BulletList from './components/BulletList';
import Slide from './components/Slide';
import ProblemiSaNatom from './slides/ProblemiSaNatom';
import StariNacin from './slides/StariNacin';
import UobicajeniNacin from './slides/UobicajeniNacin';
import CloudflareWay from './slides/CloudflareWay';
import PostupakCloudflare from './slides/PostupakCloudflare';
import NotFound from './slides/NotFound';
import Naslovnica from './slides/Naslovnica';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Naslovnica />} />
            <Route path="starinacin" element={<StariNacin />} />
            <Route path="uobicajeninacin" element={<UobicajeniNacin />} />
            <Route path="problemisnatom" element={<ProblemiSaNatom />} />
            <Route path="cloudflareway" element={<CloudflareWay/>} />
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

