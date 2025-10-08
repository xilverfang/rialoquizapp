'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Brain } from 'lucide-react';

interface MainMenuProps {
  onStartQuiz: () => void;
}

export default function MainMenu({ onStartQuiz }: MainMenuProps) {
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
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleLearnMore = () => {
    window.open('https://www.rialo.io', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <div className="w-16 h-16 mx-auto mb-4 glass rounded-full flex items-center justify-center">
              <motion.div
                className="text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                🚀
              </motion.div>
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">
              Welcome to Rialo Quiz App
            </h1>
          </motion.div>

          {/* Action Boxes */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            variants={containerVariants}
          >
            {/* Learn More Box */}
            <motion.div
              className="glass-card cursor-pointer group h-64 flex flex-col justify-center"
              variants={itemVariants}
              onClick={handleLearnMore}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ExternalLink className="w-6 h-6 text-white" />
                </motion.div>
                
                <h2 className="text-xl font-bold text-white mb-3">
                  Learn More about Rialo
                </h2>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Explore Rialo&apos;s official website to discover their vision and technology.
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-primary-green font-semibold text-sm">
                  <span>Visit rialo.io</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>

            {/* Take Quiz Box */}
            <motion.div
              className="glass-card cursor-pointer group h-64 flex flex-col justify-center"
              variants={itemVariants}
              onClick={onStartQuiz}
              whileHover={{ 
                scale: 1.02,
                y: -5
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-center">
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 glass rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Brain className="w-6 h-6 text-white" />
                </motion.div>
                
                <h2 className="text-xl font-bold text-white mb-3">
                  Take Rialo Quiz
                </h2>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  Test your knowledge and unlock exclusive rewards!
                </p>
                
                <div className="flex items-center justify-center space-x-2 text-primary-green font-semibold text-sm">
                  <span>Start Quiz</span>
                  <Brain className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-8 text-center text-gray-400"
            variants={itemVariants}
          >
            <p className="text-sm">
              Choose your path to explore the future of blockchain technology
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
