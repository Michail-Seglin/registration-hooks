
import './App.css';
import { Routes, Route } from 'react-router-dom'
import RegPage from './pages/RegPage/RegPage';
import LoginPage from './pages/LoginPage/LoginPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<RegPage />}></Route>
        <Route path='/auth' element={<LoginPage />}></Route>
      </Routes>

    </div >
  );
}

export default App;
