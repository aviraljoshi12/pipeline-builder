# VectorShift Frontend Technical Assessment

Author: Aviral Joshi

This project implements a visual pipeline builder with custom nodes and backend integration.

---

## 🌐 Live Demo

Frontend:
https://pipeline-builder-eitu.vercel.app/

Backend API:
https://pipeline-builder-akz6.onrender.com/

⚠️ Note: Backend may take ~20–30 seconds to respond on the first request due to cold start.

---

## 🚀 Features Implemented

### ✅ Part 1: Node Abstraction

- Created reusable `BaseNode` component
- Reduced code duplication across nodes
- Easily configurable handles and content
- Added new nodes to demonstrate flexibility:
  - API Node
  - Condition Node
  - Math Node
  - Image Node
  - Delay Node

---

### ✅ Part 2: Styling & UI

- Unified modern card-based design
- Clean spacing and typography
- Hover effects and subtle shadows
- Improved input and textarea styling
- Consistent UI across all nodes

---

### ✅ Part 3: Text Node Enhancements

- Auto-resizing text area for better visibility
- Dynamic node height adjustment
- Variable detection using `{{variable}}` syntax
- Dynamic handles generated for variables
- Unique handle generation & layout fixes

Example:

```
Hello {{name}}
```

This creates an input handle for `name`.

---

### ✅ Part 4: Backend Integration

Frontend sends pipeline data (nodes & edges) to the FastAPI backend API.

Backend:

- Counts number of nodes
- Counts number of edges
- Detects whether pipeline is a DAG (Directed Acyclic Graph)

Response format:

```json
{
  "num_nodes": int,
  "num_edges": int,
  "is_dag": bool
}
```

Frontend displays results via alert.

---

## 🛠 Tech Stack

Frontend:

- React
- React Flow
- Zustand (state management)

Backend:

- FastAPI
- Python

---

## 🧪 Local Development

If you prefer running locally, follow the steps below.

## ▶️ Running the Project

### Backend

cd backend

python3 -m uvicorn main:app --reload

### Frontend

cd frontend

npm install

npm start

---

## 🚀 Deployment

Frontend is deployed on **Vercel** and backend is deployed on **Render**.

This ensures the pipeline builder works without requiring local setup.

---

## 🧠 DAG Validation

A pipeline is considered a Directed Acyclic Graph (DAG) when:

- connections are directional
- no cycles exist

---

## ✨ Notes

Design inspired by VectorShift UI with custom improvements.
