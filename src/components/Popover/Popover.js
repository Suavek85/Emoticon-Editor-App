import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownItem = props => (
  <Dropdown>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      Change eyes
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item id="normal" onClick={props.changeEyesType}>
        Normal
      </Dropdown.Item>
      <Dropdown.Item id="angry" onClick={props.changeEyesType}>
        Angry
      </Dropdown.Item>
      <Dropdown.Item id="unhappy" onClick={props.changeEyesType}>
        Unhappy
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default DropdownItem;
