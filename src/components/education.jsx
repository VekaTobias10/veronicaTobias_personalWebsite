import React from 'react';


const styles = {};

styles.fill = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};


styles.hsl = {
    ...styles.fill,
    color: "white",
    paddingTop: "20px",
    fontSize: "30px"
  };


function Education() {
  
    return (
      <div
        style={{
          ...styles.fill,
          ...styles.hsl,
          background: `hsl(120,100%,40%)`
        }}
      >
        <h1>FORMACIÓN</h1>
      </div>
    );
  }

export default Education;