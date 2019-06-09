import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#e9ecef", padding: "30px 15px 30px" }}>
      <div style={{ textAlign: "center" }}>
        <p>Emoticon Editor</p>
        <p>
          <div>
            Based on icons made by{" "}
            <a
              href="https://www.flaticon.com/authors/roundicons"
              title="Roundicons"
            >
              Roundicons
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
