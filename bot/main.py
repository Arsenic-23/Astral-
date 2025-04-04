import asyncio
from telegram.ext import Application, CommandHandler
from .handlers import start_command
from .config import BOT_TOKEN

async def main():
    app = Application.builder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start_command))

    print("Bot running...")
    await app.run_polling()

if __name__ == "__main__":
    asyncio.run(main())