# 🚀 Rialo Blockchain Quiz App

A beautiful, interactive quiz application built with Next.js, TypeScript, and Framer Motion, featuring glassmorphism design and stunning animations.

## ✨ Features

### 🎨 Beautiful Design
- **Glassmorphism Design System**: Modern, translucent UI with backdrop blur effects
- **Berry Red Color Scheme**: Elegant gradient backgrounds and accent colors
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices

### 🎭 Stunning Animations
- **Welcome Animation**: Engaging entrance sequence with particle effects
- **Question Transitions**: Smooth slide animations between questions
- **Feedback Animations**: 
  - ✅ Green bounce animation for correct answers
  - ❌ Red shake animation for incorrect answers
- **Micro-interactions**: Hover effects, button animations, and loading states

### 🎯 Quiz Features
- **16 Comprehensive Questions**: Covering all aspects of Rialo blockchain technology
- **Real-time Scoring**: Live score tracking with progress indicators
- **Section Organization**: Questions grouped by topic (Basics, Architecture, Vision)
- **Answer Validation**: Immediate feedback with correct answer explanations

### 🎁 Surprise Package System
- **Unlock Threshold**: Get 12+ correct answers to unlock the surprise package
- **Interactive Box**: Click to reveal exclusive rewards
- **Animated Rewards**: Beautiful reveal animations for each reward item
- **Achievement Badges**: Digital certificates and recognition items

### 🏆 Results & Analytics
- **Performance Analysis**: Detailed score breakdown and percentage
- **Achievement Levels**: Different performance tiers with custom messages
- **Restart Functionality**: Take the quiz multiple times to improve
- **Progress Tracking**: Visual progress bars and completion indicators

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with custom glassmorphism utilities
- **Animations**: Framer Motion for smooth, performant animations
- **Icons**: Lucide React for beautiful, consistent icons
- **Fonts**: Inter font family for modern typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rialoquizapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and glassmorphism utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main quiz application
├── components/
│   ├── WelcomeAnimation.tsx # Entrance animation component
│   ├── QuizInterface.tsx    # Main quiz interface
│   ├── QuizResults.tsx      # Results and scoring display
│   └── SurprisePackage.tsx  # Surprise package modal
└── data/
    └── quizData.ts          # Quiz questions and configuration
```

## 🎨 Design System

### Glassmorphism Utilities
- `.glass` - Base glassmorphism effect
- `.glass-card` - Card component with hover effects
- `.glass-button` - Animated button with shine effect

### Color Palette
- **Primary**: Berry Red (#e91e63)
- **Success**: Green (#4caf50)
- **Error**: Red (#f44336)
- **Background**: Dark gradient with purple/blue tones

### Animation Classes
- `.animate-fadeInUp` - Fade in from bottom
- `.animate-fadeInScale` - Scale in animation
- `.animate-slideInRight` - Slide in from right
- `.success-animation` - Bounce effect for success
- `.error-animation` - Shake effect for errors

## 🎯 Quiz Content

The quiz covers three main sections:

### 1. The Basics
- Rialo's primary goals and mission
- Company history and background
- Core technology concepts
- Web3 development challenges

### 2. Key Architectural Features
- Event-driven architecture
- Virtual machine compatibility
- Web2-friendly development
- User authentication methods

### 3. Vision and Use Cases
- Real-world applications
- Developer experience improvements
- Privacy and security features
- Future blockchain innovations

## 🎁 Surprise Package Rewards

When you score 12+ correct answers, you'll unlock:

1. **Rialo Blockchain Expert Badge** 🏆
2. **Early Adopter Certificate** ⭐
3. **Web3 Innovation Pioneer** ✨
4. **Community Welcome Gift** ❤️

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npx vercel
```

## 🎨 Customization

### Adding New Questions
Edit `src/data/quizData.ts` to add new questions:

```typescript
{
  id: 17,
  question: "Your new question?",
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: "Option A",
  section: "Your Section"
}
```

### Modifying Surprise Threshold
Change the `SURPRISE_THRESHOLD` constant in `src/data/quizData.ts`:

```typescript
export const SURPRISE_THRESHOLD = 10; // Change from 12 to 10
```

### Customizing Animations
Modify animation variants in component files or add new CSS animations in `globals.css`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Rialo Team** for the comprehensive quiz content
- **Framer Motion** for amazing animation capabilities
- **Tailwind CSS** for the utility-first styling approach
- **Next.js Team** for the excellent React framework

---

**Ready to test your Rialo blockchain knowledge? Start the quiz and unlock your surprise package! 🚀**
