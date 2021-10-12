import React from 'react';
import {useParams} from "react-router-dom";



function HSL() {
    let { h, s, l } = useParams();
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
          background: `hsl(${h}, ${s}%, ${l}%)`
        }}
      >
        hsl({h}, {s}%, {l}%)
      </div>
    );
  }

export default HSL;