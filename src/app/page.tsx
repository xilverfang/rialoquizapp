'use client';

import { useState } from 'react';
import { quizQuestions, SURPRISE_THRESHOLD } from '@/data/quizData';
import MainMenu from '@/components/MainMenu';
import QuizInterface from '@/components/QuizInterface';
import QuizResults from '@/components/QuizResults';
import SurprisePackage from '@/components/SurprisePackage';

type QuizState = 'menu' | 'quiz' | 'results';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('menu');
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleStartQuiz = () => {
    setQuizState('quiz');
  };

  const handleQuizComplete = (finalScore: number, finalCorrectAnswers: number) => {
    setScore(finalScore);
    setCorrectAnswers(finalCorrectAnswers);
    setQuizState('results');
  };

  const handleRestart = () => {
    setScore(0);
    setCorrectAnswers(0);
    setQuizState('menu');
  };

  const handleShowSurprise = () => {
    setShowSurprise(true);
  };

  const handleCloseSurprise = () => {
    setShowSurprise(false);
  };

  return (
    <div className="min-h-screen">
      {quizState === 'menu' && (
        <MainMenu onStartQuiz={handleStartQuiz} />
      )}

      {quizState === 'quiz' && (
        <QuizInterface
          questions={quizQuestions}
          onQuizComplete={handleQuizComplete}
        />
      )}

      {quizState === 'results' && (
        <QuizResults
          score={score}
          totalQuestions={quizQuestions.length}
          onRestart={handleRestart}
          onShowSurprise={handleShowSurprise}
        />
      )}

      {showSurprise && (
        <SurprisePackage
          isUnlocked={correctAnswers >= SURPRISE_THRESHOLD}
          onClose={handleCloseSurprise}
        />
      )}
    </div>
  );
}