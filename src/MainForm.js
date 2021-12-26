import React, { useState } from "react";
import { getObjValue, TodoContextValue } from "./TodoContext";

function MainForm() {
  const [inputValue, setInputValue] = useState("");
  let [value, setValue] = TodoContextValue();
  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setValue((prev) => [...prev, getObjValue(inputValue)]);
    setInputValue("");
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" value={inputValue} onChange={inputChangeHandler} />
      <button type="submit">ADD</button>
    </form>
  );
}

export default MainForm;
