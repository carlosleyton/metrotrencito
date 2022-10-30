from typing import Union
from fastapi import FastAPI, Request
from services.station import get_stations

app = FastAPI()

@app.get("/")
def read_root():
    return {"hola": "mundo"}

@app.post("/stations/")
async def root():
    stations = await get_stations()
    return {"stations": stations}