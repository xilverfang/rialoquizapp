'use client';

import { motion } from 'framer-motion';
import { Trophy, Star, RefreshCw, Gift, Target } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onShowSurprise: () => void;
}

export default function QuizResults({ 
  score, 
  totalQuestions, 
  onRestart, 
  onShowSurprise 
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isSurpriseUnlocked = score >= 12;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return {
      title: "Outstanding!",
      message: "You're a true Rialo blockchain expert!",
      color: "text-yellow-400",
      icon: Trophy
    };
    if (percentage >= 80) return {
      title: "Excellent!",
      message: "You have a deep understanding of Rialo's technology!",
      color: "text-green-400",
      icon: Star
    };
    if (percentage >= 70) return {
      title: "Great job!",
      message: "You're well on your way to mastering Rialo blockchain!",
      color: "text-blue-400",
      icon: Target
    };
    if (percentage >= 60) return {
      title: "Good effort!",
      message: "You have a solid foundation in Rialo blockchain concepts!",
      color: "text-orange-400",
      icon: Star
    };
    return {
      title: "Keep learning!",
      message: "Review the concepts and try again to improve your score!",
      color: "text-red-400",
      icon: Target
    };
  };

  const performance = getPerformanceMessage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  } as const;

  const scoreVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        delay: 0.5
      }
    }
  } as const;

  return (
    <div className="min-h-screen p-4 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          className="glass-card text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="w-24 h-24 mx-auto mb-6 glass rounded-full flex items-center justify-center"
              variants={scoreVariants}
            >
              <performance.icon className="w-12 h-12 text-white" />
            </motion.div>
            
            <h1 className="text-5xl font-bold text-white mb-4">
              Quiz Complete!
            </h1>
            
            <h2 className={`text-3xl font-semibold mb-4 ${performance.color}`}>
              {performance.title}
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              {performance.message}
            </p>
          </motion.div>

          {/* Score Display */}
          <motion.div
            className="glass-card mb-8"
            variants={itemVariants }
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {score}/{totalQuestions}
                </div>
                <div className="text-gray-300">Correct Answers</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {percentage}%
                </div>
                <div className="text-gray-300">Accuracy</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {totalQuestions - score}
                </div>
                <div className="text-gray-300">Incorrect</div>
              </div>
            </div>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            className="glass-card mb-8"
            variants={itemVariants }
          >
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">Your Score</span>
                <span className="text-gray-300">{percentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                />
              </div>
            </div>
          </motion.div>

          {/* Surprise Package Status */}
          <motion.div
            className="glass-card mb-8"
            variants={itemVariants }
          >
            <div className="flex items-center justify-center space-x-4">
              <Gift className={`w-8 h-8 ${isSurpriseUnlocked ? 'text-yellow-400' : 'text-gray-400'}`} />
              <div className="text-center">
                <h3 className={`text-xl font-semibold ${isSurpriseUnlocked ? 'text-yellow-400' : 'text-gray-400'}`}>
                  {isSurpriseUnlocked ? 'Surprise Package Unlocked!' : 'Surprise Package'}
                </h3>
                <p className="text-gray-300">
                  {isSurpriseUnlocked 
                    ? 'You\'ve earned exclusive rewards!' 
                    : `Get ${12 - score} more correct answers to unlock!`
                  }
                </p>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            variants={itemVariants }
          >
            <motion.button
              className="glass-button flex items-center justify-center space-x-2"
              onClick={onRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-5 h-5" />
              <span>Take Quiz Again</span>
            </motion.button>

            {isSurpriseUnlocked && (
              <motion.button
                className="glass-button flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-green to-primary-green-dark"
                onClick={onShowSurprise}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Gift className="w-5 h-5" />
                <span>Open Surprise Package</span>
              </motion.button>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-8 text-center text-gray-400"
            variants={itemVariants }
          >
            <p>
              Thank you for taking the Rialo Blockchain Quiz! 
              Keep exploring the future of blockchain technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
