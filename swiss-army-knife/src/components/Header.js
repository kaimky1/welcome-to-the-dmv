import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

const Header = () => {
    let addNums = add(1,2)

    console.log('cowman')
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/gottaswipethemall">Gotta Swipe Them All</Link>
          </li>
          <li>
            <Link to="/ownerreview">Owner Review: Wood Edition</Link>
          </li>
          <li>
            <Link to="/gameoflife">Game of Life</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/calculator" element="Calculator"/>
          <Route path="/gottaswipethemall" element="Gotta Swipe Them All"/>
          <Route path="/ownerreview" element = "Owner Review: Wood Edition"/>
          <Route path="/gameoflife" element="Game of Life"/>
        </Routes>
      </nav>
    </Router>
  );
};

function add(n1, n2){
    return n1 + n2;
}

export default Header;
