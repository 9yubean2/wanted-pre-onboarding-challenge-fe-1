import './App.css';
import Main from "./Main";
import Auth from "./Auth";
import {Routes,Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
  );
}

export default App;
