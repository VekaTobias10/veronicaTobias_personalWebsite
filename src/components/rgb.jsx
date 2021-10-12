import React from 'react';
import { useParams } from 'react-router-dom'


const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};


styles.rgb = {
    ...styles.fill,
    color: "white",
    paddingTop: "20px",
    fontSize: "30px"
  };


function RGB() {
    let { r, g, b } = useParams();
  
    return (
      <div
        style={{
          ...styles.fill,
          ...styles.rgb,
          background: `rgb(${r}, ${g}, ${b})`
        }}
      >
        rgb({r}, {g}, {b})
      </div>
    );
  }

export default RGB;