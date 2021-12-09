import React from 'react';


function Experience() {

    const styles = {};
    let myRef = React.createRef();

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

    return (
      <div
        ref={myRef} 
        style={{
          ...styles.fill,
          ...styles.rgb,
          background: `rgb(33,150,243)`
        }}
      >
        <h1>PROYECTOS</h1>
      </div>
    );
  }

export default Experience;