from fastapi import APIRouter, Query
from app.music import search_songs, get_stream_url

router = APIRouter()

@router.get("/search")
async def search(q: str = Query(..., min_length=1)):
    return await search_songs(q)

@router.get("/stream/{song_id}")
async def stream(song_id: str):
    url = await get_stream_url(song_id)
    return {"stream_url": url}