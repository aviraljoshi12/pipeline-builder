import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const DelayNode = ({ id }) => {
  const [time, setTime] = useState(1);

  return (
    <BaseNode
      title="Delay"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-input` },
        { type: "source", position: Position.Right, id: `${id}-output` },
      ]}
    >
      <label style={{ fontSize: 12, color: "#475569" }}>
        Seconds
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
    </BaseNode>
  );
};
