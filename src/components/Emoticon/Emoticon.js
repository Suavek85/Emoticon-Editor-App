import React from "react";
import Button from "react-bootstrap/Button";

const Emoticon = props => {
  const one = props.currentFaceColor;
  function downloadSVG() {
    let svgData = `<svg
        width="200px"
        height="200px"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 473.931 473.931"
      >
        <circle
          cx="236.966"
          cy="236.966"
          r="236.966"
          fill='${one}'
        />
      </svg>`;
  
    let fakeLink = document.createElement("a");
    fakeLink.setAttribute(
      "href",
      "data:image/svg+xml;base64," + window.btoa(svgData)
    );
    fakeLink.setAttribute("download", "imageName.svg");
    fakeLink.click();
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <svg
        width="200px"
        height="200px"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 473.931 473.931"
      >
        <circle
          cx="236.966"
          cy="236.966"
          r="236.966"
          fill={props.currentFaceColor}
        />
        {props.currentEyesType}
        {props.currentMouthType}
      </svg>
      <Button style={{marginTop: '30px'}} onClick={downloadSVG} variant="outline-primary">Download your SVG</Button>
    </div>
  );
};

export default Emoticon;
