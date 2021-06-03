import React from "react";
import { useMount, useArray } from "../utils/index";

export default () => {
  const persons: { name: string; age: number }[] = [
    { name: "Pony", age: 35 },
    { name: "Ma", age: 47 },
  ];

  const { value, clear, removeIndex, add } = useArray(persons);

  useMount(() => {
    // Property 'notExist' does not exist on type '{ name: string; age: number; }[]'
    // console.log(value.notExist)
    // Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
    // add({name: 'David'})
    // Argument of type 'string' is not assignable to parameter of type 'number'
    // removeIndex("123")
  });

  return (
    <div>
      <button onClick={() => add({ name: "John", age: 22 })}>add John</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{ marginBottom: "50px" }} onClick={() => clear()}>
        clear
      </button>
      {value.map((person: { name: string; age: number }, index: number) => (
        <div key={index}>
          <span style={{ color: "red" }}>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
};
