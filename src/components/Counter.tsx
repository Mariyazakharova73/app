import React, { useState } from "react";
import s from "./Counter.module.scss";

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button className={s.btn} onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
