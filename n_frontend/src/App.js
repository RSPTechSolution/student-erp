import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Table from './components/Table/Table';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} ></Route>
          <Route exact path="/home" element={<Table/>} ></Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;
