import React from "react";
import { TodoContext } from "../todoContext/todoContext";
import "./todoSearch.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log("Acá está", event.target.value, searchValue);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Todo´s"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
