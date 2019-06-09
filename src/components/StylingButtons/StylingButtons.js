import React from "react";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { stylingArray } from "./StylingButtonsStyle";

export const StylingButtons = props => (
  <ButtonToolbar>
    {stylingArray.map(el => (
      <DropdownButton
        title={el.type}
        variant={el.variant.toLowerCase()}
        id={`dropdown-variants-${el.variant}`}
        key={el.variant}
        style={{marginRight: '10px'}}
      >
        {[0, 1, 2, 3, 4].map(elm => (
          <Dropdown.Item
            onClick={props.changeEmoHandler}
            type={el.type}
            id={el.arr[elm].type}
            eventKey="[elm + 1]"
            key={elm} 
          >
            {el.arr[elm].type}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    ))}
  </ButtonToolbar>
);
