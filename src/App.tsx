
import './App.css';
import Dashboard from './Dashboard';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className='dashboardWrapper'>
      <Router>
 
 <Routes>
 <Route path="/"  element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
 </Routes>
      </Router>
     
      
    </div>
  );
}


export default App;

