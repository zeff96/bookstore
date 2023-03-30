import { Routes, Route } from 'react-router-dom';
import './App.scss';
import RenderBooks from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';

const App = () => (
  <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<RenderBooks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
