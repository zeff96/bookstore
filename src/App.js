import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/home/homepage';
import Header from './components/navbar/header';
import Categories from './components/categories/categories';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
