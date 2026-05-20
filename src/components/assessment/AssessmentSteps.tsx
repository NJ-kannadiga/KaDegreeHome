import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Loader2, Check, ArrowRight, Upload, Code as CodeIcon, Brain, Briefcase } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

// --- Types ---
export type AssessmentData = {
    name: string;
    email: string;
    role: string;
    resume?: File;
    mcqAnswers: Record<number, string>;
    code: string;
    goal: string;
};

// --- Step 1: Intake ---
export const IntakeStep = ({ onNext }: { onNext: (data: Partial<AssessmentData>) => void }) => {
    const [data, setData] = useState({ name: '', email: '', role: '' });

    return (
        <div className="space-y-6 animate-in slide-in-from-right duration-500">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Let's Build Your Profile</h2>
                <p className="text-slate-400 mt-2">We'll tailor the assessment based on your goals.</p>
            </div>

            <div className="grid gap-4 max-w-md mx-auto">
                <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                        className="bg-slate-900 border-slate-800"
                        placeholder="John Doe"
                        onChange={e => setData({ ...data, name: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                        className="bg-slate-900 border-slate-800"
                        placeholder="john@example.com"
                        onChange={e => setData({ ...data, email: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Target Role</Label>
                    <div className="grid grid-cols-2 gap-2">
                        {['Frontend', 'Backend', 'Full Stack', 'Data Science'].map(role => (
                            <Button
                                key={role}
                                variant={data.role === role ? 'default' : 'outline'}
                                className={`w-full justify-start ${data.role === role ? 'bg-indigo-600 border-indigo-500' : 'bg-slate-900 border-slate-800'}`}
                                onClick={() => setData({ ...data, role })}
                            >
                                {role}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="pt-4">
                    <div className="border-2 border-dashed border-slate-800 rounded-lg p-6 text-center hover:border-indigo-500/50 transition-colors cursor-pointer bg-slate-900/50">
                        <Upload className="mx-auto h-8 w-8 text-slate-500 mb-2" />
                        <p className="text-sm text-slate-400">Upload Resume (PDF/DOCX)</p>
                        <p className="text-xs text-slate-600 mt-1">AI Analysis included</p>
                    </div>
                </div>

                <Button
                    className="w-full bg-indigo-600 hover:bg-indigo-700 mt-4"
                    size="lg"
                    disabled={!data.name || !data.role}
                    onClick={() => onNext(data)}
                >
                    Start Assessment <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </div>
    );
};

// --- Step 2: Adaptive Quiz ---
export const QuizStep = ({ onNext }: { onNext: (data: Partial<AssessmentData>) => void }) => {
    const [answers, setAnswers] = useState<Record<number, string>>({});

    const questions = [
        { id: 1, text: "Which HTTP method is best for creating a new resource?", options: ["GET", "POST", "PUT", "DELETE"] },
        { id: 2, text: "What is the Time Complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"] },
        { id: 3, text: "In React, what hook handles side effects?", options: ["useState", "useEffect", "useMemo", "useContext"] },
    ];

    const handleAnswer = (qid: number, opt: string) => {
        setAnswers(prev => ({ ...prev, [qid]: opt }));
    };

    return (
        <div className="space-y-8 animate-in slide-in-from-right duration-500 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-6 text-indigo-400">
                <Brain className="h-5 w-5" />
                <span className="font-mono text-sm">Adaptive Knowledge Check</span>
            </div>

            {questions.map((q, idx) => (
                <Card key={q.id} className="bg-slate-900/50 border-slate-800">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-medium text-slate-200 mb-4">{idx + 1}. {q.text}</h3>
                        <div className="grid gap-3">
                            {q.options.map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => handleAnswer(q.id, opt)}
                                    className={`p-3 text-left rounded-lg text-sm transition-all border ${answers[q.id] === opt
                                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-200'
                                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800'
                                        }`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}

            <Button
                className="w-full"
                disabled={Object.keys(answers).length < questions.length}
                onClick={() => onNext({ mcqAnswers: answers })}
            >
                Next Step
            </Button>
        </div>
    );
};

// --- Step 3: Coding Sandbox ---
export const CodeStep = ({ onNext }: { onNext: (data: Partial<AssessmentData>) => void }) => {
    const [code, setCode] = useState(`def find_missing(arr):\n    # TODO: Find the missing number in 1..N\n    n = len(arr) + 1\n    pass`);

    return (
        <div className="grid md:grid-cols-2 gap-8 animate-in slide-in-from-right duration-500 h-[600px]">
            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2 text-white">
                        <CodeIcon className="h-5 w-5 text-indigo-400" />
                        Micro-Coding Task
                    </h2>
                    <p className="text-slate-400 mt-2 text-sm">
                        Fix the function to find the missing number in an array of 1 to N.
                    </p>
                </div>
                <Card className="bg-slate-900 border-slate-800 p-4">
                    <p className="font-mono text-xs text-green-400 mb-2">Input: [1, 2, 4, 5]</p>
                    <p className="font-mono text-xs text-indigo-400">Expected Output: 3</p>
                </Card>
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg text-sm text-blue-200">
                    <p>💡 Hint: Takes O(n) time. Think about the mathematical sum formula.</p>
                </div>
            </div>

            <div className="flex flex-col h-full">
                <Card className="flex-1 bg-slate-950 border-slate-800 overflow-hidden flex flex-col">
                    <div className="bg-slate-900 p-2 border-b border-slate-800 flex justify-between items-center">
                        <span className="text-xs font-mono text-slate-500">main.py</span>
                        <Badge variant="outline" className="text-[10px] border-slate-700">Python 3.10</Badge>
                    </div>
                    <Textarea
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        className="flex-1 bg-transparent border-0 font-mono text-sm resize-none focus-visible:ring-0 p-4 text-slate-300"
                        spellCheck={false}
                    />
                </Card>
                <Button className="mt-4 bg-green-600 hover:bg-green-700" onClick={() => onNext({ code })}>
                    Submit Solution
                </Button>
            </div>
        </div>
    );
};

// --- Step 4: Results ---
export const ResultStep = ({ result }: { result: any }) => {
    if (!result) return <div className="text-center p-12 text-slate-500">Processing results... <Loader2 className="inline ml-2 animate-spin" /></div>;

    return (
        <div className="max-w-4xl mx-auto animate-in fade-in duration-700 space-y-8">
            {/* Header Score */}
            <div className="text-center py-8">
                <Badge className="mb-4 bg-indigo-500/10 text-indigo-300 border-indigo-500/20 px-4 py-1">
                    {result.level} Level Detected
                </Badge>
                <h1 className="text-5xl font-bold text-white mb-2">{result.score}<span className="text-2xl text-slate-500">/100</span></h1>
                <p className="text-slate-400">Overall Readiness Score</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Breakdown */}
                <Card className="bg-slate-900/50 border-slate-800">
                    <CardContent className="p-6 space-y-6">
                        <h3 className="font-semibold text-slate-200">Skill Breakdown</h3>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-400">Technical Knowledge (MCQ)</span>
                                    <span className="text-white">{result.breakdown.mcq}%</span>
                                </div>
                                <Progress value={result.breakdown.mcq} className="bg-slate-800 h-2" />
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-400">Coding Ability</span>
                                    <span className="text-white">{result.breakdown.code}%</span>
                                </div>
                                <Progress value={result.breakdown.code} className="bg-slate-800 h-2" />
                            </div>
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-slate-400">Resume Strength</span>
                                    <span className="text-white">{result.breakdown.resume}%</span>
                                </div>
                                <Progress value={result.breakdown.resume} className="bg-slate-800 h-2" />
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-800">
                            <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                                Critical Gaps Identified
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-400">
                                {result.gaps.map((gap: string, i: number) => (
                                    <li key={i} className="flex gap-2 text-sm">
                                        <span className="text-red-500/50">•</span> {gap}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                {/* Recommendation */}
                <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-indigo-900/50 to-slate-900 border-indigo-500/30">
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-indigo-300 mb-2">Recommended Path</h3>
                            <p className="text-2xl font-bold text-white mb-2">{result.recommendation.package}</p>
                            <p className="text-slate-400 text-sm mb-4">{result.recommendation.message}</p>

                            <div className="bg-black/30 p-3 rounded border border-indigo-500/20 flex justify-between items-center mb-4">
                                <span className="text-xs text-slate-400">Exclusive Coupon</span>
                                <code className="text-green-400 font-mono font-bold">{result.recommendation.coupon}</code>
                            </div>

                            <div className="space-y-2">
                                <Button className="w-full bg-white text-indigo-950 hover:bg-slate-200 font-bold">
                                    Enroll Now w/ Discount
                                </Button>
                                <Button variant="outline" className="w-full border-slate-700 text-slate-300 hover:bg-slate-800">
                                    Book Free 1:1 Career Call
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
