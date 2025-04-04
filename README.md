Astral

Astral is a FastAPI-based backend with a Telegram bot integration, designed for interacting with music-related services, including YouTube-based functionalities.

Features

FastAPI Backend

REST API endpoints

CORS enabled for frontend integration

YouTube media handling using yt-dlp


Telegram Bot

Uses python-telegram-bot

/start command implemented

Handles user interactions



Installation & Setup

Prerequisites

Python 3.8+

Pip

Virtual environment (recommended)


Backend Setup

1. Navigate to the backend directory:

cd backend


2. Install dependencies:

pip install -r requirements.txt


3. Run the FastAPI server:

uvicorn app.main:app --reload


4. Access the API at: http://127.0.0.1:8000



Bot Setup

1. Navigate to the bot directory:

cd bot


2. Install dependencies:

pip install -r requirements.txt


3. Set up your BOT_TOKEN in config.py


4. Run the bot:

python main.py



Usage

Start the backend server first.

Run the Telegram bot to interact with users.

Extend the bot with more commands in handlers.py.


Contributing

Feel free to fork and submit pull requests. Ensure code quality before submitting.

License

MIT License (if applicable).
