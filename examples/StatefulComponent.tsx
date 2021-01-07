import React from "react";

const StatefulComponent: React.FC<{prop1: string;prop2:string; prop3:string; prop4: string; prop5: string }> = ({
  prop1, prop2, prop3, prop4, prop5,
}) => (
  <ul>
    <li>{prop1}</li>
    <li>
      {prop2}
      {" "}
      {prop3}
    </li>
    <li>{prop4}</li>
    <li>{prop5}</li>
  </ul>
);

export default StatefulComponent;
