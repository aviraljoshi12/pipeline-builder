import { Handle } from "reactflow";

export const BaseNode = ({ title, children, handles = [], height }) => {
  return (
    <div
      style={{
        width: 220,
        minHeight: height || 120,
        padding: "20px",
        borderRadius: "10px",
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        fontSize: "13px",
        transition: "0.15s ease",
        position: "relative",
        overflow: "visible",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.12)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)")
      }
    >
      {/* Title */}

      <div
        style={{
          fontWeight: 600,
          marginBottom: 4,
          color: "#0f172a",
        }}
      >
        {title}
      </div>

      {/* Content */}

      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {children}
      </div>

      {/* Dynamic Handles */}

      {handles.map((h, index) => {
        return (
          <Handle
            key={h.id}
            type={h.type}
            position={h.position}
            id={h.id}
            style={h.style}
            isConnectable={true}
          />
        );
      })}
    </div>
  );
};
