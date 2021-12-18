import React from 'react';
import veronica from '../assets/img/veronica-tobias-img.jpg';
import './presentationStyle.css';


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
          background: 'black',
          color: 'white'
        }}
      >
        <img className='img-principal' src={veronica} alt='img-veronica-tobias'></img>
        <h1>Verónica Tobias</h1>
        <h4>Frontend Developer</h4>
        
      </div>
    );
  }

export default Presentation;