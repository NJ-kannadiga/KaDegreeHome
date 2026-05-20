export const MIXED_QUESTIONS = [
    // Technical Logic
    { id: 1, type: 'tech', text: "Fastest way to find a name in a sorted pile of 1000 index cards?", options: ["Check one by one", "Check random cards", "Split pile in half repeatedly (Binary Search)", "Check every 10th card"], correct: 2 },
    { id: 2, type: 'tech', text: "If `x > 5` prints A, and `x > 10` prints B. If x is 15, what prints?", options: ["A", "B", "A and B", "Depends on order"], correct: 0 },
    { id: 3, type: 'tech', text: "Which data structure is best for LIFO (Last In First Out)?", options: ["Queue", "Stack", "Array", "Tree"], correct: 1 },
    { id: 4, type: 'tech', text: "Time complexity of accessing an element in an array by index?", options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], correct: 0 },
    { id: 5, type: 'tech', text: "What does SQL stand for?", options: ["Structured Question Language", "Structured Query Language", "Simple Query Logic", "System Query Link"], correct: 1 },
    // Behavioral / HR
    { id: 6, type: 'hr', text: "A critical bug is found 1 hour before launch. What do you do?", options: ["Hide it and fix later", "Delay the launch immediately", "Assess severity, fix if critical, else document", "Blame the tester"], correct: 2 },
    { id: 7, type: 'hr', text: "You disagree with a senior developer's approach. How do you handle it?", options: ["Do it their way silently", "Argue publicly in the meeting", "Discuss privately with data/examples", "Complain to the manager"], correct: 2 },
    { id: 8, type: 'hr', text: "You are stuck on a problem for 4 hours. What's the best next step?", options: ["Keep trying for another 4 hours", "Ask a colleague or check docs", "Give up", "Switch to a different task"], correct: 1 },
    { id: 9, type: 'hr', text: "A teammate is constantly missing deadlines. What do you do?", options: ["Report them to HR", "Offer to help or ask if they are blocked", "Ignore it", "Do their work for them"], correct: 1 },
    { id: 10, type: 'hr', text: "Why do you want to be a software engineer?", options: ["High salary only", "Love for solving problems & building", "Parents told me to", "Easy remote work"], correct: 1 },
];

export const CODING_CHALLENGE = {
    title: "Find the Duplicate",
    desc: "Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one repeated number.",
    example: "Input: nums = [1,3,4,2,2] \nOutput: 2",
    starterCode: "def find_duplicate(nums):\n    # Write your logic here\n    pass"
};
