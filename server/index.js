// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// API Routes
app.post('/api/analyze', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a communication coach. Analyze the user's message and provide feedback on how to improve clarity, effectiveness, and overall communication style. Include specific suggestions and explanations."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    const analysis = completion.choices[0].message.content;
    res.json({ analysis });
  } catch (error) {
    console.error('Error analyzing message:', error);
    res.status(500).json({ error: 'Failed to analyze message' });
  }
});

app.post('/api/chat', async (req, res) => {
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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});