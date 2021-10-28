import React from "react";
import Users from "./Users.jsx";
import Home from "./Home.jsx";
import { BrowserRouter as Router , Link, Route ,Switch} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="page">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route component={Users} path="/users" />
      </div>
    </Router>
  );
};

export default App;
