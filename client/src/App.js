import './assets/css/style-prefix.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Filter from './pages/Filter';
import Single from './pages/Single';
import AIService from './pages/AIService';
import Header from './components/navigation/Header';
import Footer from './components/Footer';
import UploadToCloud from './components/UploadToCloud';


function App() {
  return (
  <>
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Home/>} />
      <Route path='/filter' element={<Filter/>} />
      <Route path='/job/:id' element={<Single/>} />
      <Route path='/ai-service' element={<AIService/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
