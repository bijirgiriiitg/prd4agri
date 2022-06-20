import React, { useState } from "react";
import { Radio } from "../App";
export default function Pyar() {
  const [selected, setSelected] = useState("third");
  return (
    <>
      <Radio
        value="first"
        selected={selected}
        text="Manipur"
        //onChange={setSelected}
      />
      <Radio
        value="second"
        selected={selected}
        text="Assam"
        //onChange={setSelected}
      />
      <Radio
        value="third"
        selected={selected}
        text="Maharashtra"
        onChange={setSelected}
      />
      <Radio
        value="fourth"
        selected={selected}
        text="None"
        //onChange={setSelected}
      />
    </>
  );
}