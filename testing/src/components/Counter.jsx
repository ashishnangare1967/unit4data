import React, { useState } from "react";
import { Button } from "./Button";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div data-testid="counter">
      <h2 data-testid="count">Count: {count}</h2>
      <Button children={"Add"} color={"teal"} size={"large"} func={handleAdd} />
    </div>
  );
};
