import logo from './logo.svg';
import './App.css';
import AddShoe from './Components/AddShoe';
import SearchShoe from './Components/SearchShoe';
import DeleteShoe from './Components/DeleteShoe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddShoe/>}/>
      <Route path="/search" element={<SearchShoe/>}/>
      <Route path="/delete" element={<DeleteShoe/>}/>
      <Route path="/view" element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
