from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import json
from collections import defaultdict

app = FastAPI()

# allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: str = Form(...)):
    data = json.loads(pipeline)

    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # build graph
    graph = defaultdict(list)
    indegree = defaultdict(int)

    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        graph[source].append(target)
        indegree[target] += 1

    # Kahn’s algorithm for DAG check
    queue = [n["id"] for n in nodes if indegree[n["id"]] == 0]

    visited = 0

    while queue:
        node = queue.pop(0)
        visited += 1

        for neighbor in graph[node]:
            indegree[neighbor] -= 1
            if indegree[neighbor] == 0:
                queue.append(neighbor)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
