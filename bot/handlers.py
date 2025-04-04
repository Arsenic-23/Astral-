from telegram import Update, InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo
from telegram.ext import ContextTypes

from .config import WEB_APP_URL

async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    keyboard = [
        [InlineKeyboardButton("🎵 Open Vibie", web_app=WebAppInfo(url=WEB_APP_URL))]
    ]
    await update.message.reply_text(
        "Welcome to Vibie! Enjoy music in high quality.",
        reply_markup=InlineKeyboardMarkup(keyboard),
    )