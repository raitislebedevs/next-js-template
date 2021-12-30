import React from "react";
import { Button } from "react-bootstrap";
import DropDownListModel from "../../../model/dropDownListModel";

function DropDownList(props) {
  let list: DropDownListModel[] = props.list;

  return (
    <div className="dropdown">
      <Button className="btn btn-danger">Dropdown</Button>
      <div className="dropdown-content">
        {list?.map((el) => {
          <a href={el.link}>{el.name}</a>;
        })}
      </div>
    </div>
  );
}

export default DropDownList;
