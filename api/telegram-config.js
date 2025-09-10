// File: /api/telegram-config.js
// This goes in your Vercel project's /api folder

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get tokens from environment variables
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Check if environment variables exist
  if (!botToken || !chatId) {
    return res.status(500).json({ 
      error: 'Telegram configuration not found',
      botToken: !!botToken,
      chatId: !!chatId
    });
  }

  // Return the configuration
  res.status(200).json({
    botToken: botToken,
    chatId: chatId
  });
}