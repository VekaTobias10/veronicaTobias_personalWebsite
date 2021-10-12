import React from "react";
import RGB from '../components/rgb';
import HSL from '../components/hsl';
import NavLink from "../components/nav";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";

const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

styles.content = {
  ...styles.fill,
  top: "40px",
  textAlign: "center"
};

styles.nav = {
  padding: 0,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "40px",
  width: "100%",
  display: "flex"
};


function PrincipalPage() {
    let location = useLocation();
  
    return (
      <div style={styles.fill}>
        <ul style={styles.nav}>
          <NavLink to="/hsl/10/90/50">Red</NavLink>
          <NavLink to="/hsl/120/100/40">Green</NavLink>
          <NavLink to="/rgb/33/150/243">Blue</NavLink>
          <NavLink to="/rgb/240/98/146">Pink</NavLink>
        </ul>
  
        <div style={styles.content}>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={600}
            >
              <Switch location={location}>
                <Route path="/hsl/:h/:s/:l" children={<HSL />}/>
                <Route path="/rgb/:r/:g/:b" children={<RGB />}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
  
export default PrincipalPage;