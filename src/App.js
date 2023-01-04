import './App.css';
import Main from "./Main";
import Auth from "./Auth";
import {Routes,Route,useNavigate } from 'react-router-dom';

function App() {
  let navigate=useNavigate();
  let isAuthorized = localStorage.getItem("token");
  if(!isAuthorized)alert('로그인해주세요!')
  return (
    <Routes>
      {!isAuthorized
      ?<Route path="/" element={<Auth navigate={navigate}/>}/>
      :<Route path="/" element={<Main navigate={navigate}/>}/>
      }
      <Route path="/auth" element={<Auth navigate={navigate}/>}/>
    </Routes>
  );
}

export default App;
