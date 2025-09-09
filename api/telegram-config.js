// api/telegram-config.js
// This file should be placed in your Vercel project's /api directory

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get environment variables (these will be securely stored in Vercel)
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Check if environment variables are set
  if (!botToken || !chatId) {
    return res.status(500).json({ 
      error: 'Telegram configuration not found. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables in Vercel.' 
    });
  }

  // Return the configuration
  res.status(200).json({
    botToken: botToken,
    chatId: chatId
  });
}