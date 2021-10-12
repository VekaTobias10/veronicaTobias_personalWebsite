import React from "react";
import {
  Link,
} from "react-router-dom";

const styles = {};

styles.navItem = {
    textAlign: "center",
    flex: 1,
    listStyleType: "none",
    padding: "10px"
  };
  

function NavLink(props) {
    return (
      <li style={styles.navItem}>
        <Link {...props} style={{ color: "inherit" }} />
      </li>
    );
  }

export default NavLink;