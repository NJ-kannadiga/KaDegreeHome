import re

with open('src/pages/Internship.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

new_projects = '''{[
                   { title: "Project 01: Hybrid GraphRAG Knowledge Engine", tag: "GraphRAG + LLM", desc: "AI that understands connections, not just keywords. Ingest documents, build a knowledge graph (Neo4j), and use Vector Search + Graph Traversal to answer complex cross-document queries. (Python, LlamaIndex, Groq, Flask)" },
                   { title: "Project 02: AI Demand Forecasting Engine", tag: "Time Series AI", desc: "Predict future demand using historical data and external factors (weather, events). Train models using PatchTST (PyTorch) to generate forecasts with uncertainty estimation for smarter planning." },
                   { title: "Project 03: Edge Vision Intelligence System", tag: "Computer Vision", desc: "Real-time warehouse and safety monitoring. Capture video from IP/RTSP cameras, analyze locally with Ollama & LLaVA, and automate alerts via n8n for privacy-first, on-device intelligence." }
                 ].map((proj, i) => ('''

old_projects_regex = r'\{\[\s*\{\s*title:\s*"Regulatory GraphRAG.*?\].map\(\(proj, i\) => \('

text = re.sub(old_projects_regex, new_projects, text, flags=re.DOTALL)

with open('src/pages/Internship.tsx', 'w', encoding='utf-8') as f:
    f.write(text)
print('Projects updated')
