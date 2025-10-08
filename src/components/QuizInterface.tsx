'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { QuizQuestion } from '@/data/quizData';
import { CheckCircle, XCircle, Star, Gift } from 'lucide-react';

interface QuizInterfaceProps {
  questions: QuizQuestion[];
  onQuizComplete: (score: number, correctAnswers: number) => void;
}

export default function QuizInterface({ questions, onQuizComplete }: QuizInterfaceProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (answeredQuestions.has(currentQuestionIndex)) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 1);
      setCorrectAnswers(correctAnswers + 1);
    }

    setAnsweredQuestions(prev => new Set([...prev, currentQuestionIndex]));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      onQuizComplete(score, correctAnswers);
    }
  };

  const getScoreColor = () => {
    const percentage = (correctAnswers / questions.length) * 100;
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto max-h-screen overflow-y-auto">
        {/* Header */}
        <motion.div
          className="glass-card text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            The Rialo Blockchain Quiz
          </h1>
          <div className="flex items-center justify-center space-x-4 text-lg">
            <span className="text-gray-300">Question {currentQuestionIndex + 1} of {questions.length}</span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className={`font-semibold ${getScoreColor()}`}>
              Score: {correctAnswers}/{questions.length}
            </span>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="glass-card mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            className="glass-card mb-8 max-h-96 overflow-y-auto"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 glass rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-white">
                    {currentQuestionIndex + 1}
                  </span>
                </div>
                <span className="text-sm text-gray-300 bg-gray-700 px-3 py-1 rounded-full">
                  {currentQuestion.section}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-white leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            {/* Answer Options */}
            <div>
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrectAnswer = option === currentQuestion.correctAnswer;
                const isAnswered = answeredQuestions.has(currentQuestionIndex);
                
                let buttonClass = `glass-button w-full text-left p-4 transition-all duration-300 rounded-lg ${index > 0 ? 'mt-4' : ''}`;
                
                if (isAnswered) {
                  if (isCorrectAnswer) {
                    buttonClass += " success-animation text-white";
                  } else if (isSelected && !isCorrectAnswer) {
                    buttonClass += " error-animation text-white";
                  } else {
                    buttonClass += " bg-gray-600 text-gray-300";
                  }
                } else if (isSelected) {
                  buttonClass += " bg-primary-green text-white";
                }

                return (
                  <motion.button
                    key={index}
                    className={buttonClass}
                    onClick={() => handleAnswerSelect(option)}
                    disabled={isAnswered}
                    whileHover={!isAnswered ? { scale: 1.01 } : {}}
                    whileTap={!isAnswered ? { scale: 0.99 } : {}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center">
                      <div className="w-5 h-5 rounded-lg border-2 border-white/30 mr-3 flex items-center justify-center flex-shrink-0">
                        {isAnswered && isCorrectAnswer && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                        {isAnswered && isSelected && !isCorrectAnswer && (
                          <XCircle className="w-3 h-3 text-white" />
                        )}
                        {!isAnswered && isSelected && (
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-left text-sm leading-relaxed">{option}</span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              className="glass-card mb-8"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    isCorrect ? 'success-animation' : 'error-animation'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {isCorrect ? (
                    <CheckCircle className="w-8 h-8 text-white" />
                  ) : (
                    <XCircle className="w-8 h-8 text-white" />
                  )}
                </motion.div>
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  isCorrect ? 'text-green-400' : 'text-red-400'
                }`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </h3>
                
                {!isCorrect && (
                  <p className="text-gray-300 mb-4">
                    The correct answer is: <span className="text-white font-semibold">
                      {currentQuestion.correctAnswer}
                    </span>
                  </p>
                )}
                
                <motion.button
                  className="glass-button"
                  onClick={handleNextQuestion}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Score Display */}
        <motion.div
          className="glass-card text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white">Correct: {correctAnswers}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="w-5 h-5 text-pink-400" />
              <span className="text-white">
                Surprise: {correctAnswers >= 12 ? 'Unlocked!' : `${12 - correctAnswers} more needed`}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
