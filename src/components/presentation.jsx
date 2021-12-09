import React from 'react';




function Presentation() {

    const styles = {};
    let myRef = React.createRef();

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

    return (
      <div
        ref={myRef} 
        style={{
          ...styles.fill,
          ...styles.hsl,
          background: `hsl(10, 90%, 50%)`
        }}
      >
        <h1>Verónica Tobias</h1>
        <h2>Frontend Developer</h2>
      </div>
    );
  }

export default Presentation;