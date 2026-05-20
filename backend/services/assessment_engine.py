import random
import json
from models import Assessment, User, db

class AssessmentEngine:
    @staticmethod
    def parse_resume(file_storage):
        """
        Simulate LLM-based resume parsing.
        In a real app, this would send file text to OpenAI.
        """
        # Mock extracted data
        return {
            "skills": ["Python", "React", "SQL"] if random.random() > 0.5 else ["HTML", "CSS"],
            "experience_years": random.randint(0, 3),
            "education": "B.Tech"
        }

    @staticmethod
    def evaluate_code(code_snippet, language="python"):
        """
        Simulate code execution and analysis.
        """
        score = 0
        feedback = []
        
        # Simple heuristic check
        if "return" in code_snippet:
            score += 40
        else:
            feedback.append("Missing return statement")
            
        if "def" in code_snippet or "function" in code_snippet:
            score += 40
        else:
            feedback.append("Function definition missing")
            
        if len(code_snippet) > 20:
            score += 20
        
        return {
            "score": score,  # out of 100 for coding part
            "feedback": feedback,
            "passed": score > 50
        }

    @staticmethod
    def analyze_resume_gaps(resume_data, target_role):
        """
        Compare resume skills vs target role usage mock logic.
        """
        gaps = []
        tips = []
        
        if target_role == "Frontend":
            if "React" not in resume_data["skills"]:
                gaps.append("Missing Modern Framework (React/Vue)")
        elif target_role == "Backend":
             if "SQL" not in resume_data["skills"]:
                gaps.append("Database Skills (SQL) missing")
        
        if resume_data["experience_years"] == 0:
            tips.append({"before": "Empty Project Section", "after": "Add 2-3 GitHub Projects with READMEs"})
        
        tips.append({"before": "Generic Objective Statement", "after": "Role-specific summary highlighting key tech stack."})

        return gaps, tips

    @staticmethod
    def calculate_total_score(mcq_score, code_score, resume_score):
        # Weights: MCQ 30%, Coding 50%, Resume 20%
        total = (mcq_score * 0.3) + (code_score * 0.5) + (resume_score * 0.2)
        return int(total)

    @staticmethod
    def get_recommendations(total_score, gaps):
        if total_score > 80:
            return {
                "level": "Advanced",
                "package": "Placement Accelerator",
                "coupon": "PRO-DEV-20",
                "message": "You are ready for top-tier roles."
            }
        elif total_score > 50:
             return {
                "level": "Intermediate",
                "package": "Full Stack Mastery",
                "coupon": "SKILLUP-15",
                "message": "Strong foundation, but needs project depth."
            }
        else:
             return {
                "level": "Beginner",
                "package": "Foundation Bootcamp",
                "coupon": "START-NEW-10",
                "message": "Let's build your core skills first."
            }
