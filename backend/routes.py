from flask import Blueprint, request, jsonify
from models import db, User, ChatSession, Message
from services.agent_logic import process_message

api_bp = Blueprint('api', __name__)

@api_bp.route('/start_session', methods=['POST'])
def start_session():
    # Always create a new user for demo simplicity, or look up by logic
    user = User(name="")
    db.session.add(user)
    db.session.commit()

    session = ChatSession(user_id=user.id)
    db.session.add(session)
    db.session.commit()

    return jsonify({"session_id": session.id, "user_id": user.id, "message": "Hi! I am the Course Agent. What is your name?"})

@api_bp.route('/chat', methods=['POST'])
def chat():
    data = request.json
    session_id = data.get('session_id')
    content = data.get('content')
    
    if not session_id or not content:
        return jsonify({"error": "Missing session_id or content"}), 400
        
    # Save User message
    user_msg = Message(session_id=session_id, sender='user', content=content)
    db.session.add(user_msg)
    db.session.commit()
    
    # Get Agent Response
    response_text = process_message(session_id, content)
    
    # Save Agent message
    agent_msg = Message(session_id=session_id, sender='agent', content=response_text)
    db.session.add(agent_msg)
    db.session.commit()
    
    return jsonify({"response": response_text})

@api_bp.route('/roadmap/<int:user_id>', methods=['GET'])
def get_roadmap(user_id):
    user = User.query.get(user_id)
    if not user or not user.roadmap_generated:
        return jsonify({"error": "Roadmap not ready"}), 404
    
    # Mock Roadmap Data
    return jsonify({
        "level": user.skill_level,
        "modules": [
            {"title": "Module 1: Basics", "status": "unlocked"},
            {"title": "Module 2: Advanced Topics", "status": "locked"}
        ]
    })
