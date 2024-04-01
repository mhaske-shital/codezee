import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './componets/Login';
import Navbar from './componets/Navbar';
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import Registration from './pages/Registration';
function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
