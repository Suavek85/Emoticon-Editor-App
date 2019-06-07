import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const normalEyes = (
  <g fill="#333">
    <circle cx="164.937" cy="155.231" r="37.216" />
    <circle cx="305.664" cy="155.231" r="37.216" />
  </g>
);

export const angryEyes = (
  <g fill="#333">
    <path d="M106.883,85.989c25.141,18.817,50.282,37.638,75.423,56.456c9.669,7.237,18.978-9.018,9.44-16.153 c-25.141-18.817-50.282-37.638-75.423-56.456C106.659,62.596,97.346,78.85,106.883,85.989L106.883,85.989z" />
    <path d="M356.298,69.832c-25.141,18.817-50.282,37.638-75.423,56.456c-9.538,7.139-0.228,23.39,9.44,16.153 c25.141-18.817,50.282-37.638,75.423-56.456C375.276,78.85,365.967,62.596,356.298,69.832L356.298,69.832z" />
    <circle cx="164.937" cy="155.231" r="37.216" />
    <circle cx="305.664" cy="155.231" r="37.216" />
  </g>
);

export const unhappyEyes = (
  <>
    <g fill="#333">
      <circle cx="164.938" cy="155.232" r="37.216" />
      <circle cx="305.667" cy="155.232" r="37.216" />
    </g>
    <path
      d="M343.167,188.612c0,0-27.517,33.874-27.517,68.819c0,15.203,12.31,27.521,27.513,27.525	c15.218-0.007,27.532-12.325,27.532-27.528C370.695,240.507,343.167,188.612,343.167,188.612z"
      fill="#a2d4de"
    />
  </>
);

export const stylingArray = [
  {
    type: "Color",
    variant: "Primary",
    arr: [
      { type: "orange", code: "#ffc10e" },
      { type: "brown", code: "#D2B48C" },
      { type: "pink", code: "#ffc0cb" },
      { type: "green", code: "#A4D1A2" }
    ]
  },
  {
    type: "Eyes",
    variant: "Secondary",
    arr: [
      { type: "normal", code: normalEyes },
      { type: "unhappy", code: unhappyEyes },
      { type: "angry", code: angryEyes },
      { type: "xxxxxx", code: "xxx" }
    ]
  }
];

export const StylingButtons = props => (
  <ButtonToolbar>
    {stylingArray.map(el => (
      <DropdownButton
        title={el.type}
        variant={el.variant.toLowerCase()}
        id={`dropdown-variants-${el.variant}`}
        key={el.variant}
      >
        <Dropdown.Item
          onClick={props.changeEmoHandler}
          type={el.type}
          id={el.arr[0].type}
          eventKey="1"
        >
          {el.arr[0].type}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={props.changeEmoHandler}
          id={el.arr[1].type}
          eventKey="2"
        >
          {el.arr[1].type}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={props.changeEmoHandler}
          id={el.arr[2].type}
          eventKey="3"
          active
        >
          {el.arr[2].type}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={props.changeEmoHandler}
          id={el.arr[3].type}
          eventKey="4"
        >
          {el.arr[3].type}
        </Dropdown.Item>
      </DropdownButton>
    ))}
  </ButtonToolbar>
);
