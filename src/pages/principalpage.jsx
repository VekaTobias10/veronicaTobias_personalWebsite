import React from "react";
import Education from '../components/education';
import Presentation from '../components/presentation';
import Contact from '../components/contact';
import Projects from '../components/projects';
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
          <NavLink to="/veronicatobias">Inicio</NavLink>
          <NavLink to="/formacion">Formación</NavLink>
          <NavLink to="/proyectos">Proyectos</NavLink>
          <NavLink to="/contacto">Contáctame!</NavLink>
        </ul>
  
        <div style={styles.content}>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={600}
            >
              <Switch location={location}>
                <Route path="/veronicatobias" children={<Presentation />}/>
                <Route path="/formacion" children={<Education />}/>
                <Route path="/proyectos" children={<Projects />}/>
                <Route path="/contacto" children={<Contact />}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    );
  }
  
export default PrincipalPage;