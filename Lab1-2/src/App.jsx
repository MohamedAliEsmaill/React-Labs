import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Input from "./components/classComponents/Input/Input";
import Slider from "./components/classComponents/Slider/Slider";
import UsersList from "./components/classComponents/UserList/UserList";
import UserCard from "./components/funcComponents/UserCard/UserCard";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-indigo-500  p-6 shadow-lg ">
          <div className="container mx-auto flex justify-between items-center">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/input" className="nav-link">
                  Input
                </Link>
              </li>
              <li>
                <Link to="/slider" className="nav-link">
                  Slider
                </Link>
              </li>
              <li>
                <Link to="/userlist" className="nav-link">
                  User List
                </Link>
              </li>
              <li>
                <Link to="/usercard" className="nav-link">
                  User card
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="flex-grow container mx-auto p-8">
          <Routes>
            <Route path="/input" element={<Input />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/userlist" element={<UsersList />} />
            <Route path="/usercard" element={<UserCard />} />
            <Route
              path="/"
              element={
                <div className="text-center text-2xl">Welcome to Home Page</div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
    // <h1>Hello</h1>
  );
}

export default App;
