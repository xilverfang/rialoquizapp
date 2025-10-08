'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Gift, Star, Sparkles, Heart } from 'lucide-react';

interface SurprisePackageProps {
  isUnlocked: boolean;
  onClose: () => void;
}

const surpriseItems = [
  {
    id: 1,
    name: "🎉 Rialo Merch Collection! 🎉",
    description: "Congratulations! You've qualified for exclusive Rialo merchandise!",
    icon: Gift,
    color: "text-green-400",
    bgColor: "bg-green-400/20"
  },
  {
    id: 2,
    name: "Rialo T-Shirt",
    description: "Premium quality Rialo branded t-shirt in your size",
    icon: Star,
    color: "text-blue-400",
    bgColor: "bg-blue-400/20"
  },
  {
    id: 3,
    name: "Rialo Hoodie",
    description: "Comfortable Rialo hoodie for the blockchain enthusiast",
    icon: Sparkles,
    color: "text-purple-400",
    bgColor: "bg-purple-400/20"
  },
  {
    id: 4,
    name: "Rialo Stickers Pack",
    description: "Limited edition Rialo stickers for your laptop and devices",
    icon: Heart,
    color: "text-pink-400",
    bgColor: "bg-pink-400/20"
  }
];

export default function SurprisePackage({ isUnlocked, onClose }: SurprisePackageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [revealedItems, setRevealedItems] = useState<number[]>([]);

  const handleOpenBox = () => {
    setIsOpen(true);
    // Reveal items one by one
    surpriseItems.forEach((_, index) => {
      setTimeout(() => {
        setRevealedItems(prev => [...prev, index]);
      }, (index + 1) * 500);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
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

  const boxVariants = {
    closed: { 
      scale: 1,
      rotateY: 0
    },
    opening: { 
      scale: 1.1,
      rotateY: 180,
      transition: {
        duration: 0.8,
        ease: "easeInOut" as const
      }
    },
    open: { 
      scale: 1,
      rotateY: 180,
      transition: {
        duration: 0.5
      }
    }
  } as const;

  const confettiVariants = {
    hidden: { 
      opacity: 0,
      scale: 0
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        repeatDelay: 0.3
      }
    }
  } as const;

  if (!isUnlocked) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="glass-card max-w-2xl w-full mx-4 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Confetti Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-primary-green to-primary-green-dark rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={confettiVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: i * 0.1 }}
              />
            ))}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              variants={itemVariants}
            >
              🎉 Congratulations! 🎉
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              You&apos;ve qualified for exclusive Rialo Merch!
            </motion.p>

            {/* Mystery Box */}
            <motion.div
              className="relative mb-8"
              variants={itemVariants}
            >
              <motion.div
                className="w-32 h-32 mx-auto glass rounded-2xl flex items-center justify-center cursor-pointer"
                variants={boxVariants}
                animate={isOpen ? "open" : "closed"}
                onClick={!isOpen ? handleOpenBox : undefined}
                whileHover={!isOpen ? { scale: 1.05 } : {}}
                whileTap={!isOpen ? { scale: 0.95 } : {}}
              >
                {!isOpen ? (
                  <motion.div
                    className="text-6xl"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    🎁
                  </motion.div>
                ) : (
                  <motion.div
                    className="text-6xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    ✨
                  </motion.div>
                )}
              </motion.div>

              {!isOpen && (
                <motion.p
                  className="text-sm text-gray-400 mt-4"
                  variants={itemVariants}
                >
                  Click the box to reveal your Rialo Merch!
                </motion.p>
              )}
            </motion.div>

            {/* Revealed Items */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="space-y-4 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {surpriseItems.map((item, index) => (
                    <AnimatePresence key={item.id}>
                      {revealedItems.includes(index) && (
                        <motion.div
                          className={`glass-card p-4 ${item.bgColor} border border-white/20`}
                          initial={{ opacity: 0, x: -50, scale: 0.8 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            delay: index * 0.2
                          }}
                        >
                          <div className="flex items-center space-x-4">
                            <motion.div
                              className={`w-12 h-12 glass rounded-full flex items-center justify-center ${item.color}`}
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              transition={{ duration: 0.3 }}
                            >
                              <item.icon className="w-6 h-6" />
                            </motion.div>
                            <div className="text-left">
                              <h3 className={`text-lg font-semibold ${item.color}`}>
                                {item.name}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <motion.div
              className="flex justify-center space-x-4"
              variants={itemVariants}
            >
              <motion.button
                className="glass-button"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
