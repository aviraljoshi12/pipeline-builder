import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const MathNode = ({ id }) => {
  const [value] = useState(0);

  return (
    <BaseNode
      title="Math"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-a` },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-b`,
          style: { top: "70%" },
        },
        { type: "source", position: Position.Right, id: `${id}-result` },
      ]}
    >
      <div>Result: {value}</div>
    </BaseNode>
  );
};
