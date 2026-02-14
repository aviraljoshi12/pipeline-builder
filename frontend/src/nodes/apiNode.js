import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const APINode = ({ id }) => {
  const [url, setUrl] = useState("");

  return (
    <BaseNode
      title="API"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-trigger` },
        { type: "source", position: Position.Right, id: `${id}-response` },
      ]}
    >
      <label style={{ fontSize: 12, color: "#475569" }}>
        URL
        <input value={url} onChange={(e) => setUrl(e.target.value)} />
      </label>
    </BaseNode>
  );
};
