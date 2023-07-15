
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import MyNav from './components/MyNav';
import ViewProduct from './components/ViewProduct';
function App() {
  return (
    <>
    <MyNav/>
    <Routes>
      <Route path='' Component={Home}/>
      <Route path='view/:id' Component={ViewProduct}/>
    </Routes>
   
    <Footer/>
    </>
  );
}

export default App;
