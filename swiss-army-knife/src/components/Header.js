import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Calculator from "./calculator/Calculator";
import styles from './Header.module.css'

const Header = () => {
  return (
    <Router>
      <WrappedRoutes></WrappedRoutes>
    </Router>
  );
};

function WrappedRoutes(props) {
  let location = useLocation();
  let { pathname } = location;
  console.log("cowman location", location.pathname);

  let isCalcRoute;
  let isSwipeRoute;
  let isReviewRoute;
  let isLifeRoute;

  // if(pathname === '/calculator'){
  //   isCalcRoute === true;
  // }
  // if(pathname === '/gottaswipethemall'){
  //   isSwipeRoute === true;
  // }
  // if(pathname === '/ownerreview'){
  //   isReviewRoute === true;
  // }
  // if(pathname === '/gameoflife'){
  //   isLifeRoute === true;
  // }

  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className={`nav-item ${isCalcRoute ? "active" : ""}`}>
          <Link className="nav-link active" to="/calculator">
            Calculator
          </Link>
        </li>
        <li className={`nav-item ${isSwipeRoute ? "active" : ""}`}>
          <Link className="nav-link active" to="/gottaswipethemall">
            Gotta Swipe Them All
          </Link>
        </li>
        <li className={`nav-item ${isReviewRoute ? "active" : ""}`}>
          <Link className="nav-link active" to="/ownerreview">
            Owner Review: Wood Edition
          </Link>
        </li>
        <li className={`nav-item ${isLifeRoute ? "active" : ""}`}>
          <Link className="nav-link active" to="/gameoflife">
            Game of Life
          </Link>
        </li>
      </ul>

      <Routes>
        <Route
          path="/calculator"
          element={
            <CenterMeDaddy>
              <Calculator />
            </CenterMeDaddy>
          }
        />
        <Route path="/gottaswipethemall" element="Gotta Swipe Them All" />
        <Route path="/ownerreview" element="Owner Review: Wood Edition" />
        <Route path="/gameoflife" element="Game of Life" />
      </Routes>
    </nav>
  );
}

function CenterMeDaddy(props) {
  return <div className={styles.daddywrapper}>{props.children}</div>;
}

export default Header;
