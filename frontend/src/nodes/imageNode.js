import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ImageNode = ({ id }) => {
  return (
    <BaseNode
      title="Image"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-file` },
        { type: "source", position: Position.Right, id: `${id}-output` },
      ]}
    >
      <div>Image Processor</div>
    </BaseNode>
  );
};
