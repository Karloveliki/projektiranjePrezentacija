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
import Postupak from './slides/PostupakCloudflare'
import CloudflareTunnel from './slides/CloudflareTunnel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThreeConnections from './slides/ThreeConnections';
import TCPveze from './slides/Tcpveze';
import DodavanjeWebsitea from './slides/DodavanjeWebsitea';

function presentation() {
  const slides = [
    {path:"starinacin", slide: <StariNacin />},
    {path:"uobicajeninacin", slide: <UobicajeniNacin/>},
    {path:"problemisnatom", slide: <ProblemiSaNatom/>},
    {path:"cloudflareway", slide: <CloudflareWay/>},
    {path:"cloudflaretunnel", slide: <CloudflareTunnel/>},
    {path:"threeconnections1", slide: <TCPveze/>},
    {path:"threeconnections2", slide: <ThreeConnections/>},
    {path:"postupakcloudflare", slide: <PostupakCloudflare/>},
    {path:"dodavanjewebsitea", slide: <DodavanjeWebsitea/>}
  ];
  const p = {
    naslovnica: <Naslovnica/>,
    slides: slides,
    notFound: <NotFound/>
  }
  return p
}
function App() {
  const p = presentation()
  console.log("prezentacija je:", p)
  const slideRoutes = p.slides.map( s => {
    return <Route path={s.path} element={s.slide} key={s.path}/>
  })
  return (
    <div className="w3-container w3-light-blue">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout presentation={p}/>}>
            <Route index element={p.naslovnica} />
            {slideRoutes}
            <Route path="*" element={p.notFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

