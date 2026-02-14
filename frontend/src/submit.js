// submit.js

import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    const pipeline = { nodes, edges };

    const formData = new FormData();
    formData.append("pipeline", JSON.stringify(pipeline));

    try {
      const res = await fetch(
        "https://pipeline-builder-akz6.onrender.com/pipelines/parse",
        {
          method: "POST",
          body: formData,
        },
      );

      const data = await res.json();

      alert(
        `Pipeline Info:

Nodes: ${data.num_nodes}
Edges: ${data.num_edges}
Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`,
      );
    } catch (err) {
      console.error(err);
      alert("Error processing pipeline");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
