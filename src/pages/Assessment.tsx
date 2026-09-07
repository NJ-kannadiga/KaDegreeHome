import React, { useState } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/layout/SEO";
import { MIXED_QUESTIONS, CODING_CHALLENGE } from "@/data/assessment";
import {
  Brain,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Award,
  Code2,
  Zap,
  RotateCcw,
  Target,
  UserCheck,
} from "lucide-react";

export default function AssessmentPage() {
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState<"intro" | "quiz" | "code" | "result">("intro");
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [codeAnswer, setCodeAnswer] = useState<string>(CODING_CHALLENGE.starterCode);

  const currentQ = MIXED_QUESTIONS[questionIndex];
  const isLastQuestion = questionIndex === MIXED_QUESTIONS.length - 1;

  const handleSelectOption = (optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionIndex,
    }));
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      setCurrentStep("code");
    } else {
      setQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex((prev) => prev - 1);
    }
  };

  // Calculate scores
  const techQuestions = MIXED_QUESTIONS.filter((q) => q.type === "tech");
  const hrQuestions = MIXED_QUESTIONS.filter((q) => q.type === "hr");

  const techScore = techQuestions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correct ? acc + 1 : acc;
  }, 0);

  const hrScore = hrQuestions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correct ? acc + 1 : acc;
  }, 0);

  const totalScore = techScore + hrScore;
  const scorePercentage = Math.round((totalScore / MIXED_QUESTIONS.length) * 100);

  let recommendation = "AI Full Stack Developer Pro";
  if (scorePercentage >= 80) {
    recommendation = "AI Full Stack Developer — Placement Program";
  } else if (scorePercentage < 50) {
    recommendation = "BCA — Full Stack Product Track (1st & 2nd Year)";
  }

  const restartQuiz = () => {
    setSelectedAnswers({});
    setQuestionIndex(0);
    setCodeAnswer(CODING_CHALLENGE.starterCode);
    setCurrentStep("intro");
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#171717] font-sans selection:bg-[#6B1830]/20 flex flex-col justify-between">
      <SEO
        title="AI-Powered Skill Assessment | KA Degree"
        description="Benchmark your technical logic, behavioral alignment, and coding readiness with KA Degree's AI evaluation engine."
      />

      <Navbar />

      <main className="flex-1 pt-32 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* STEP 1: INTRO */}
        {currentStep === "intro" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DDD7CC] shadow-xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#6B1830]/10 border border-[#6B1830]/20 px-4 py-1.5 mb-6 text-xs font-bold uppercase tracking-widest text-[#6B1830]">
              <Sparkles className="w-4 h-4" />
              <span>Skill Evaluation Engine 2026</span>
            </div>

            <div className="mb-6 flex justify-center">
              <div className="h-20 w-20 rounded-2xl bg-[#6B1830] text-white flex items-center justify-center shadow-lg">
                <Brain className="h-10 w-10" />
              </div>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] mb-4">
              AI Skill & Placement Assessment
            </h1>

            <p className="text-base sm:text-lg text-[#6B6464] max-w-xl mx-auto leading-relaxed mb-8">
              Evaluate your problem-solving speed, computer science fundamentals, HR readiness, and coding logic in under 5 minutes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left max-w-2xl mx-auto">
              <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#DDD7CC] flex items-center gap-3">
                <Target className="w-5 h-5 text-[#6B1830] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">10 Questions</div>
                  <div className="text-[11px] text-[#6B6464]">Tech & Behavioral</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#DDD7CC] flex items-center gap-3">
                <Code2 className="w-5 h-5 text-[#6B1830] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">1 Logic Challenge</div>
                  <div className="text-[11px] text-[#6B6464]">Python Simulation</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#DDD7CC] flex items-center gap-3">
                <Award className="w-5 h-5 text-[#6B1830] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#171717]">Instant Benchmark</div>
                  <div className="text-[11px] text-[#6B6464]">Cohort Match</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setCurrentStep("quiz")}
              className="py-4 px-10 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-serif font-bold text-lg transition-all shadow-md hover:shadow-xl inline-flex items-center gap-3"
            >
              <span>Start Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* STEP 2: MULTIPLE CHOICE QUIZ */}
        {currentStep === "quiz" && (
          <motion.div
            key={questionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD7CC] shadow-xl"
          >
            {/* Progress Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDD7CC]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B1830]">
                  Question {questionIndex + 1} of {MIXED_QUESTIONS.length}
                </span>
                <span className="ml-3 text-xs font-semibold px-2.5 py-0.5 rounded bg-[#F7F4EE] border border-[#DDD7CC] text-[#171717] capitalize">
                  {currentQ.type === "tech" ? "Technical Logic" : "Behavioral & HR"}
                </span>
              </div>
              <div className="text-xs font-mono text-[#6B6464]">
                {Math.round(((questionIndex + 1) / MIXED_QUESTIONS.length) * 100)}% Complete
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#EFEAE1] rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-[#6B1830] transition-all duration-300"
                style={{ width: `${((questionIndex + 1) / MIXED_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#171717] mb-8 leading-snug">
              {currentQ.text}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((opt, optIdx) => {
                const isSelected = selectedAnswers[currentQ.id] === optIdx;
                return (
                  <button
                    key={optIdx}
                    type="button"
                    onClick={() => handleSelectOption(optIdx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all text-sm sm:text-base flex items-center justify-between ${
                      isSelected
                        ? "bg-[#6B1830] text-white border-[#6B1830] font-semibold shadow-md"
                        : "bg-[#F7F4EE] hover:bg-[#EFEAE1] text-[#171717] border-[#DDD7CC]"
                    }`}
                  >
                    <span>{opt}</span>
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-white bg-white/20 text-white" : "border-[#DDD7CC]"
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-[#DDD7CC]">
              <button
                type="button"
                onClick={handlePrevQuestion}
                disabled={questionIndex === 0}
                className="px-5 py-2.5 rounded-xl border border-[#DDD7CC] text-[#171717] hover:bg-[#F7F4EE] disabled:opacity-40 text-sm font-semibold inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>

              <button
                type="button"
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQ.id] === undefined}
                className="px-6 py-3 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white disabled:opacity-40 font-serif font-bold text-sm inline-flex items-center gap-2 shadow-sm"
              >
                <span>{isLastQuestion ? "Next: Coding Challenge" : "Next Question"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: CODING CHALLENGE */}
        {currentStep === "code" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#DDD7CC] shadow-xl"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#DDD7CC]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#6B1830]">
                  Practical Challenge
                </span>
                <h3 className="text-lg font-serif font-bold text-[#171717]">{CODING_CHALLENGE.title}</h3>
              </div>
              <Code2 className="w-6 h-6 text-[#6B1830]" />
            </div>

            <p className="text-sm text-[#6B6464] mb-4 leading-relaxed">{CODING_CHALLENGE.desc}</p>

            <div className="bg-[#171717] text-white p-4 rounded-xl font-mono text-xs mb-6">
              <span className="text-gray-400"># Example:</span>
              <pre className="mt-1 text-emerald-400">{CODING_CHALLENGE.example}</pre>
            </div>

            <label className="block text-xs font-bold uppercase text-[#6B1830] tracking-wider mb-2">
              Write Your Logic (Python):
            </label>

            <textarea
              rows={6}
              value={codeAnswer}
              onChange={(e) => setCodeAnswer(e.target.value)}
              className="w-full p-4 font-mono text-sm bg-[#1A1A1A] text-emerald-300 rounded-xl border border-[#DDD7CC] outline-none focus:border-[#6B1830] mb-6"
            />

            <div className="flex items-center justify-between pt-4 border-t border-[#DDD7CC]">
              <button
                type="button"
                onClick={() => setCurrentStep("quiz")}
                className="px-5 py-2.5 rounded-xl border border-[#DDD7CC] text-[#171717] hover:bg-[#F7F4EE] text-sm font-semibold inline-flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Questions
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep("result")}
                className="px-8 py-3.5 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-serif font-bold text-base inline-flex items-center gap-2 shadow-md"
              >
                <span>Calculate My Score</span>
                <Zap className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP 4: RESULT REPORT */}
        {currentStep === "result" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-[#DDD7CC] shadow-2xl text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[#6B1830]/10 text-[#6B1830] flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#171717] mb-2">
              Assessment Completed!
            </h2>
            <p className="text-sm text-[#6B6464] mb-8">
              Here is your verified skill breakdown and cohort recommendation.
            </p>

            {/* Score Ring / Card */}
            <div className="max-w-md mx-auto p-6 bg-[#F7F4EE] rounded-2xl border border-[#DDD7CC] mb-8">
              <div className="text-4xl font-bold text-[#6B1830] mb-1">{scorePercentage}%</div>
              <div className="text-xs uppercase font-bold text-[#171717] tracking-wider mb-4">
                Overall Evaluation Score
              </div>

              <div className="grid grid-cols-2 gap-4 text-left border-t border-[#DDD7CC] pt-4 text-xs">
                <div>
                  <span className="text-[#6B6464] block">Technical Score:</span>
                  <span className="font-bold text-[#171717] text-sm">
                    {techScore} / {techQuestions.length} ({Math.round((techScore / techQuestions.length) * 100)}%)
                  </span>
                </div>

                <div>
                  <span className="text-[#6B6464] block">HR & Behavioral:</span>
                  <span className="font-bold text-[#171717] text-sm">
                    {hrScore} / {hrQuestions.length} ({Math.round((hrScore / hrQuestions.length) * 100)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="p-6 rounded-2xl bg-[#6B1830]/5 border border-[#6B1830]/20 mb-8 text-left">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#6B1830] block mb-1">
                Recommended Program Matched for You:
              </span>
              <h3 className="text-xl font-serif font-bold text-[#171717] mb-2">{recommendation}</h3>
              <p className="text-xs text-[#6B6464]">
                Based on your technical proficiency and aptitude score, this program will optimize your learning curve and career outcomes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                onClick={restartQuiz}
                className="py-3 px-6 rounded-xl border border-[#DDD7CC] text-[#171717] hover:bg-[#F7F4EE] font-semibold text-sm inline-flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" /> Retake Test
              </button>

              <Link href={`/apply?program=${encodeURIComponent(recommendation)}`}>
                <a className="py-3.5 px-8 rounded-xl bg-[#6B1830] hover:bg-[#8B2945] text-white font-serif font-bold text-base inline-flex items-center justify-center gap-2 shadow-md">
                  <span>Apply for Matched Program</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
}

