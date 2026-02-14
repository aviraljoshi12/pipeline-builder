// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        background: "#0f172a",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        transition: "0.15s ease",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "translateY(-1px)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
      draggable
    >
      <span style={{ color: "#fff" }}>{label}</span>
    </div>
  );
};
