# AI Communication Coach

![AI Communication Coach](https://github.com/username/ai-communication-coach/raw/main/client/public/logo.svg)

## 🚀 Overview

AI Communication Coach is an interactive web application that helps users improve their communication skills through AI-powered feedback and practice. The application combines real-time conversation practice with detailed message analysis to provide personalized coaching for professional and personal communication.

## ✨ Features

- **Interactive Chat Practice**: Engage in realistic conversations with an AI coach that provides feedback on your communication style
- **Message Analysis**: Get detailed feedback on clarity, tone, and effectiveness of your written messages
- **Progress Tracking**: Monitor your improvement over time with visual metrics and growth indicators
- **Voice Input**: Practice verbal communication with built-in speech recognition
- **Personalized Suggestions**: Receive tailored tips to enhance your specific communication style
- **Multiple Practice Scenarios**: Choose from various communication contexts like job interviews, customer service, and negotiations

## 🖥️ Screenshots

<div align="center">
  <img src="https://github.com/username/ai-communication-coach/raw/main/screenshots/chat-interface.png" alt="Chat Interface" width="45%">
  <img src="https://github.com/username/ai-communication-coach/raw/main/screenshots/message-analysis.png" alt="Message Analysis" width="45%">
</div>

## 🛠️ Tech Stack

### Frontend
- React.js with React Router
- Tailwind CSS for styling
- Lucide React for icons
- Axios for API communication

### Backend
- Node.js with Express
- OpenAI API integration
- CORS for cross-origin resource sharing
- Dotenv for environment variable management

## 📋 Prerequisites

- Node.js (v18.x or higher)
- npm (v10.x or higher)
- OpenAI API Key

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/username/ai-communication-coach.git
cd ai-communication-coach
```

2. Install dependencies for both server and client
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Create environment variables
   - Create a `.env` file in the server directory
   - Add the following variables:
```
PORT=5001
OPENAI_API_KEY=your_openai_api_key
FRONTEND_URL=http://localhost:3000
```

## 🚀 Running the Application

### Development Mode

1. Start the server
```bash
cd server
npm run dev
```

2. In a new terminal, start the client
```bash
cd client
npm start
```

3. Open your browser and navigate to http://localhost:3000

### Production Mode

1. Build the client
```bash
cd client
npm run build
```

2. Start the server
```bash
cd ../server
npm run start
```

## 📊 Usage Guide

### Practice Chat
- Select a practice scenario from the suggestions or start a free conversation
- Type your message or use the voice input feature (microphone icon)
- Receive AI responses with subtle coaching embedded in the conversation
- View coaching tips that appear based on your conversation patterns

### Message Analysis
- Enter any message you want to analyze (e.g., email draft, presentation introduction)
- Get comprehensive feedback on:
  - Clarity: How easily your message can be understood
  - Tone: Appropriateness of your language for the intended audience
  - Effectiveness: How likely your message will achieve its purpose
- Review suggestions for improvement
- Track analysis history for recurring patterns

### Progress Metrics
- View your improvement over time across different communication dimensions
- Identify specific areas that need more practice
- Set goals based on the metrics provided

## 🧪 Testing

```bash
# Run frontend tests
cd client
npm test

# Run backend tests (when implemented)
cd ../server
npm test
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- [OpenAI](https://openai.com/) for their powerful GPT API
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide Icons](https://lucide.dev/) for the beautiful SVG icons
- [React](https://reactjs.org/) for the frontend framework

---

<p align="center">Made with ❤️ for better communication</p>