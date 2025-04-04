import subprocess

YOUTUBE_SEARCH = "ytsearch1:{}"

async def search_songs(query: str):
    # Placeholder: You can later use YouTube API or scrape with yt-dlp
    return [
        {"id": "dQw4w9WgXcQ", "title": "Never Gonna Give You Up", "artist": "Rick Astley"},
    ]

async def get_stream_url(video_id: str):
    command = [
        "yt-dlp",
        "-f", "bestaudio",
        "-g", f"https://www.youtube.com/watch?v={video_id}"
    ]
    result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    return result.stdout.decode().strip()