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
      >
        <Dropdown.Item
          onClick={props.changeEmoHandler}
          type={el.type}
          id={el.arr[0].type}
          eventKey="1"
          active
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
        <Dropdown.Item
          onClick={props.changeEmoHandler}
          id={el.arr[4].type}
          eventKey="4"
        >
          {el.arr[4].type}
        </Dropdown.Item>
      </DropdownButton>
    ))}
  </ButtonToolbar>
);
