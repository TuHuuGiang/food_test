import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import CatePage from './pages/catePage';
import HomePage from './pages/homePage';
import ProdDetail from './pages/prodDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product-category' element={<CatePage />} />
        <Route path='/product-detail' element={<ProdDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
