from fastapi import APIRouter, HTTPException
import os
import requests

router = APIRouter()

# api endpoint for weather data
# data is fetched from the openweathermap api

async def fetch_weather(zipcode: str):
  if len(zipcode) != 5:
    raise HTTPException(status_code=400, detail="Invalid zipcode")
  
  print(zipcode)
  print(os.getenv("OWM_API_KEY"))
  
  url = f"https://api.openweathermap.org/data/2.5/weather?zip={zipcode},us&appid={os.getenv('OWM_API_KEY')}"
  response = requests.get(url)
  return response.json()


@router.get("/weather/{zipcode}")
async def get_weather(zipcode: str):
  data = await fetch_weather(zipcode)
  return data
