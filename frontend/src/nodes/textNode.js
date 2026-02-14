// textNode.js

import { useState, useEffect } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import { BaseNode } from "./baseNode";
import { useMemo } from "react";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const extractVariables = (text) => {
    const matches = text.match(/{{(.*?)}}/g) || [];

    return matches
      .map((v) => v.replace(/{{|}}/g, "").trim())
      .filter((v) => v.length > 0);
  };

  const variables = extractVariables(currText);

  const updateNodeInternals = useUpdateNodeInternals();

  const uniqueVariables = useMemo(() => [...new Set(variables)], [variables]);
  const nodeHeight = Math.max(90, 60 + uniqueVariables.length * 24);

  useEffect(() => {
    const timeout = setTimeout(() => updateNodeInternals(id), 0);
    return () => clearTimeout(timeout);
  }, [uniqueVariables, id, updateNodeInternals]);

  return (
    <BaseNode
      title="Text"
      handles={[
        ...uniqueVariables.map((variable, index) => ({
          type: "target",
          position: Position.Left,
          id: `${id}-${variable}-${index}`,
          style: {
            top: 48 + index * 24,
            left: -6,
          },
        })),
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
      height={nodeHeight}
    >
      <label style={{ fontSize: 12, color: "#475569" }}>Text</label>
      <textarea
        value={currText}
        onChange={(e) => setCurrText(e.target.value)}
        rows={1}
        style={{
          resize: "none",
          overflow: "hidden",
          width: "100%",
          padding: "6px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          fontSize: "12px",
          fontFamily: "inherit",
        }}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
      />
    </BaseNode>
  );
};
