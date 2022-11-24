import dotenv

from fastapi import FastAPI, Depends

from .routers import weather

dotenv.load_dotenv(dotenv_path=".env")

app = FastAPI()

app.include_router(weather.router)

@app.get("/")
async def root():
  return {
    "message": "Weatherapp_api",
    "version": "1.0"
    }