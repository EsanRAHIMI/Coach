// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;
const API_BASE_PATH = process.env.API_BASE_PATH || '';

// Middleware
app.use(cors({
  // Allow requests from the frontend origin
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(bodyParser.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// API Routes
app.post(`${API_BASE_PATH}/api/analyze`, async (req, res) => {
  try {
    const { message } = req.body;
    
    // تحلیل پیام و ایجاد نتیجه ساختاریافته
    const analysis = {
      overview: "خلاصه تحلیل پیام",
      score: calculateOverallScore(), // تابع محاسبه امتیاز کلی
      clarity: {
        score: calculateClarityScore(),
        feedback: "بازخورد در مورد وضوح پیام"
      },
      tone: {
        score: calculateToneScore(),
        feedback: "بازخورد در مورد لحن پیام"
      },
      effectiveness: {
        score: calculateEffectivenessScore(),
        feedback: "بازخورد در مورد اثربخشی پیام"
      },
      suggestions: [
        "پیشنهاد اول برای بهبود",
        "پیشنهاد دوم برای بهبود"
      ]
    };

    res.json({ analysis });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post(`${API_BASE_PATH}/api/chat`, async (req, res) => {
  try {
    const { message, conversation } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Construct messages history
    const messages = [
      {
        role: "system",
        content: "You are a communication coach having a conversation with the user. Respond naturally but also provide subtle tips on how the user can improve their communication."
      }
    ];

    // Add previous conversation context if available
    if (conversation && Array.isArray(conversation)) {
      conversation.forEach(msg => {
        messages.push(msg);
      });
    }

    // Add the current user message
    messages.push({
      role: "user",
      content: message
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages
    });

    const reply = completion.choices[0].message.content;
    res.json({ 
      reply,
      role: "assistant"
    });
  } catch (error) {
    console.error('Error in chat:', error);
    res.status(500).json({ error: 'Failed to process chat' });
  }
});

// Placeholder functions for the scoring methods
function calculateOverallScore() {
  return Math.floor(Math.random() * 30) + 70;
}

function calculateClarityScore() {
  return Math.floor(Math.random() * 30) + 70;
}

function calculateToneScore() {
  return Math.floor(Math.random() * 30) + 70;
}

function calculateEffectivenessScore() {
  return Math.floor(Math.random() * 30) + 70;
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} with API base path: ${API_BASE_PATH}`);
  console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
});