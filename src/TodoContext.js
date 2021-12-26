import React, { useContext, createContext, useState, useEffect } from "react";

const TodoContext = createContext();

function ListContext({ children }) {
  const [value, setValue] = useState([]);
  return (
    <TodoContext.Provider value={[value, setValue]}>
      {children}
    </TodoContext.Provider>
  );
}
export const getObjValue = (text) => {
  return {
    id: Date.now(),
    message: text,
    child: []
  };
};

export default ListContext;
export const TodoContextValue = () => useContext(TodoContext);
