import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Login from './views/Login';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
