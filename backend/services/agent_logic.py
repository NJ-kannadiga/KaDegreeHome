from models import db, User, ChatSession, Message

def process_message(session_id, content):
    session = ChatSession.query.get(session_id)
    if not session:
        return "Error: Session not found."

    user = session.user

    # Basic State Machine Logic
    # 1. Ask Name
    if not user.name:
        # Assume user input is name if short, or check intent
        user.name = content
        db.session.commit()
        return f"Nice to meet you, {content}. Are you a student or a working professional?"

    # 2. Ask Status
    if user.is_student is None:
        lowered = content.lower()
        if "student" in lowered:
            user.is_student = True
            db.session.commit()
            return "Great! Which year of study are you in?"
        elif "professional" in lowered or "work" in lowered:
            user.is_student = False
            db.session.commit()
            # Skip year
            user.year_of_study = "N/A"
            return "Understood. What is your current job role?"
        else:
             return "Please tell me if you are a student or a professional."

    # 3. Ask Year (Student Only)
    if user.is_student and not user.year_of_study:
        user.year_of_study = content
        db.session.commit()
        return "Okay. To customize your learning path, I'd like to assess your coding skills.\nCan you write a simple function in Python (or pseudocode) to reverse a string?"

    # 4. Assessment Phase
    if "def" in content or "return" in content or "reverse" in content:
        # Simple keyword check for correctness
        success = "[::-1]" in content or "for" in content or "reversed" in content
        if success:
             user.skill_level = "Intermediate"
             user.roadmap_generated = True
             db.session.commit()
             return "That looks solid! Based on your code, you have a good grasp of basic syntax.\nI've generated a personalized roadmap for you.\n(Simulated: Advanced Python & Data Structures Course Recommended). Start your 6-day trial now!"
        else:
             user.skill_level = "Beginner"
             user.roadmap_generated = True
             db.session.commit()
             return "Good attempt! It looks like you're just starting out.\nI've generated a roadmap tailored for beginners.\n(Simulated: Introduction to Programming Course Recommended). Start your 6-day trial now!"

    # default
    return "I am here to help guide your learning journey. Tell me more about your goals!"
