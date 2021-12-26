import React, { useState } from "react";
import { addIntoList, deleteAnItemFromList, updateAList } from "./Logic";
import { getObjValue, TodoContextValue } from "./TodoContext";

function TodoList({ item }) {
  const [showForm, setShowForm] = useState(false);
  const [addChild, setAddChild] = useState("");
  const [text, setText] = useState("");
  let [value, setValue] = TodoContextValue();

  function submitHandler(e) {
    e.preventDefault();
    updateAList(item.id, text, value);
    setShowForm(false);
    setText("");
    console.log(value);
  }

  function deleteHandler() {
    let val = deleteAnItemFromList(item.id, value);
    setValue(val);
    console.log(value);
  }
  return (
    <div style={{ marginLeft: "30px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h5>{item.message}</h5>
        <button
          onClick={() => {
            setShowForm((prev) => !prev);
          }}
        >
          Edit
        </button>
        <button onClick={deleteHandler}>Delete</button>
      </div>
      {showForm && (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={text}
            placeholder="edit a list"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let updatedValue = addIntoList(item.id, getObjValue(addChild), value);
          setValue(updatedValue);
          setAddChild("");
          console.log(value);
        }}
      >
        <input
          type="text"
          value={addChild}
          placeholder="Add A list"
          onChange={(e) => {
            setAddChild(e.target.value);
          }}
        />
      </form>
      {item.child.length !== 0 &&
        item.child.map((val) => {
          return <TodoList key={val.id} item={val} />;
        })}
    </div>
  );
}

export default TodoList;
