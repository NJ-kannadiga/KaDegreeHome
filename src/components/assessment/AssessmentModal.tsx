import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Brain, Code, Terminal, MessageSquare, Clock, ArrowRight, X, CheckCircle, AlertTriangle } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';

// --- Data ---
const MIXED_QUESTIONS = [
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

const CODING_CHALLENGE = {
    title: "Find the Duplicate",
    desc: "Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one repeated number.",
    example: "Input: nums = [1,3,4,2,2] \nOutput: 2",
    starterCode: "def find_duplicate(nums):\n    # Write your logic here\n    pass"
};

export function AssessmentModal() {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0); // 0: Intro, 1: Intake, 2: Quiz, 3: Code, 4: Report
    const [qIndex, setQIndex] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [code, setCode] = useState(CODING_CHALLENGE.starterCode);
    const [timer, setTimer] = useState(600); // 10 mins total
    const [formData, setFormData] = useState({ name: '', email: '' });

    useEffect(() => {
        // Check local storage but force open for verify
        const hasSeen = localStorage.getItem('kd_assess_full_v2');
        if (!hasSeen) {
            const t = setTimeout(() => setOpen(true), 1500);
            return () => clearTimeout(t);
        }
    }, []);

    useEffect(() => {
        if (step >= 2 && step <= 3 && timer > 0) {
            const i = setInterval(() => setTimer(t => t - 1), 1000);
            return () => clearInterval(i);
        }
    }, [step, timer]);

    const handleNext = () => setStep(step + 1);

    const handleQuizAnswer = (optIndex: number) => {
        const newAns = [...answers, optIndex];
        setAnswers(newAns);
        if (qIndex < MIXED_QUESTIONS.length - 1) {
            setQIndex(qIndex + 1);
        } else {
            setStep(3); // Go to Coding
        }
    };

    const calculateScores = () => {
        let tech = 0, hr = 0;
        answers.forEach((ans, i) => {
            if (ans === MIXED_QUESTIONS[i].correct) {
                if (MIXED_QUESTIONS[i].type === 'tech') tech++;
                else hr++;
            }
        });
        // tech is out of 5, hr is out of 5
        return {
            tech: (tech / 5) * 100,
            hr: (hr / 5) * 100,
            codeScore: code.length > 50 ? 85 : 20
        };
    };

    const scores = calculateScores();

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            {/* Fullscreen Overlay Style Override */}
            <DialogContent className="fixed inset-0 w-screen h-screen max-w-none m-0 rounded-none border-none p-0 bg-slate-50 overflow-auto z-50 flex flex-col font-sans">

                {/* Header */}
                <div className="flex justify-between items-center px-8 py-4 bg-white border-b border-slate-200 shadow-sm sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white p-1 rounded font-bold text-xs">KD</div>
                        <span className="font-bold text-slate-900 tracking-tight">Career Assessment</span>
                    </div>

                    {step > 1 && step < 4 && (
                        <div className="flex items-center gap-2 bg-slate-100 px-3 py-1 rounded-full text-slate-600 font-mono text-sm font-bold">
                            <Clock className="w-4 h-4 text-orange-500" />
                            {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                        </div>
                    )}

                    <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                        <X className="w-6 h-6 text-slate-400" />
                    </Button>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center items-center p-8 bg-slate-50/50">

                    {/* Step 0: Hero Intro */}
                    {step === 0 && (
                        <div className="max-w-4xl text-center space-y-8 animate-in slide-in-from-bottom duration-700">
                            <div className="inline-flex items-center justify-center p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
                                <Brain className="w-16 h-16" />
                            </div>
                            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight">
                                Are You <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Industry Ready?</span>
                            </h1>
                            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                                Take our comprehensive 3-stage assessment to benchmark your skills against top tech companies.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto pt-8">
                                <Card className="p-8 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <Terminal className="w-10 h-10 text-indigo-500 mb-4" />
                                    <h3 className="font-bold text-xl mb-2 text-slate-800">1. Technical Logic</h3>
                                    <p className="text-slate-500">Algorithms, Data Structures & System Design basics.</p>
                                </Card>
                                <Card className="p-8 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <MessageSquare className="w-10 h-10 text-green-500 mb-4" />
                                    <h3 className="font-bold text-xl mb-2 text-slate-800">2. Behavioral Fit</h3>
                                    <p className="text-slate-500">Situational judgment tests for workplace success.</p>
                                </Card>
                                <Card className="p-8 border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                                    <Code className="w-10 h-10 text-blue-500 mb-4" />
                                    <h3 className="font-bold text-xl mb-2 text-slate-800">3. Live Coding</h3>
                                    <p className="text-slate-500">Hands-on coding challenge to prove syntax mastery.</p>
                                </Card>
                            </div>

                            <div className="pt-12">
                                <Button size="lg" className="rounded-full text-lg px-12 py-8 bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20 font-bold" onClick={handleNext}>
                                    Start Assessment <ArrowRight className="ml-2 w-6 h-6" />
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Step 1: Intake */}
                    {step === 1 && (
                        <Card className="w-full max-w-lg p-8 space-y-6 bg-white shadow-xl animate-in fade-in zoom-in-95 duration-300">
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-slate-900">Create Candidate Profile</h2>
                                <p className="text-slate-500">Required to generate your personalized report.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Full Name</Label>
                                    <Input value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="John Doe" className="bg-slate-50" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Email</Label>
                                    <Input value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="john@example.com" className="bg-slate-50" />
                                </div>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 font-bold py-6 text-lg" onClick={handleNext} disabled={!formData.name}>
                                    Begin Assessment
                                </Button>
                            </div>
                        </Card>
                    )}

                    {/* Step 2: Quiz */}
                    {step === 2 && (
                        <div className="w-full max-w-3xl space-y-8 animate-in slide-in-from-right duration-500">
                            <div className="flex justify-between text-sm uppercase tracking-wider font-bold text-slate-400">
                                <span>Question {qIndex + 1} / {MIXED_QUESTIONS.length}</span>
                                <span>{MIXED_QUESTIONS[qIndex].type === 'tech' ? 'Technical Round' : 'HR Round'}</span>
                            </div>

                            <Progress value={((qIndex) / 10) * 100} className="h-2 bg-slate-200" />

                            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                                {MIXED_QUESTIONS[qIndex].text}
                            </h2>

                            <div className="grid gap-4 pt-4">
                                {MIXED_QUESTIONS[qIndex].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleQuizAnswer(i)}
                                        className="p-6 text-left bg-white border-2 border-slate-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all font-medium text-slate-700 text-lg shadow-sm"
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Coding */}
                    {step === 3 && (
                        <div className="w-full h-full max-w-6xl grid grid-cols-2 gap-8 py-8 animate-in fade-in duration-500">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
                                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-wider text-sm">
                                    <Code className="w-4 h-4" /> Coding Challenge
                                </div>
                                <h2 className="text-3xl font-bold text-slate-900">{CODING_CHALLENGE.title}</h2>
                                <p className="text-slate-600 text-lg leading-relaxed">{CODING_CHALLENGE.desc}</p>

                                <div className="bg-slate-900 text-slate-200 p-6 rounded-xl font-mono text-sm">
                                    {CODING_CHALLENGE.example}
                                </div>

                                <div className="bg-blue-50 text-blue-700 p-4 rounded-lg flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                                    <p className="text-sm">Make sure to handle edge cases where the array might be empty.</p>
                                </div>
                            </div>

                            <div className="flex flex-col h-full bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                                <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <span className="text-xs text-slate-500 font-mono">solution.py</span>
                                </div>
                                <Textarea
                                    value={code}
                                    onChange={e => setCode(e.target.value)}
                                    className="flex-1 bg-transparent text-slate-300 font-mono p-6 resize-none focus:ring-0 border-0 text-sm leading-relaxed"
                                    spellCheck={false}
                                />
                                <div className="p-4 bg-slate-900 border-t border-slate-800 flex justify-end">
                                    <Button className="bg-green-600 hover:bg-green-700 font-bold px-8" onClick={() => setStep(4)}>
                                        Submit Solution
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Report */}
                    {step === 4 && (
                        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-200">
                            <div className="bg-slate-900 p-12 text-center text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-bold mb-2">Assessment Complete</h2>
                                    <p className="text-slate-400">Here is your comprehensive skills breakdown</p>
                                </div>
                            </div>

                            <div className="p-12 grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <h4 className="font-bold text-slate-700">Technical Logic</h4>
                                            <span className="text-2xl font-bold text-blue-600">{scores.tech}%</span>
                                        </div>
                                        <Progress value={scores.tech} className="h-3 bg-slate-100" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <h4 className="font-bold text-slate-700">Behavioral Fit</h4>
                                            <span className="text-2xl font-bold text-green-600">{scores.hr}%</span>
                                        </div>
                                        <Progress value={scores.hr} className="h-3 bg-slate-100" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <h4 className="font-bold text-slate-700">Coding Standards</h4>
                                            <span className="text-2xl font-bold text-orange-600">{scores.codeScore}%</span>
                                        </div>
                                        <Progress value={scores.codeScore} className="h-3 bg-slate-100" />
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Recommended Path</h3>
                                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Full Stack Mastery</h2>
                                        <p className="text-slate-600 text-sm mb-6">
                                            Based on your logic and code structure, you are ready for advanced React patterns and System Design.
                                        </p>
                                        <ul className="space-y-2 mb-8">
                                            <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-500" /> Advanced Backend</li>
                                            <li className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-green-500" /> Cloud Deployment</li>
                                        </ul>
                                    </div>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-bold py-6">
                                        View Curriculum
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </DialogContent >
        </Dialog >
    );
}
