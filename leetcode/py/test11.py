import httpx
from typing import Any

USER_AGENT = "weather-app/1.0"
GAODE_API_BASE = "https://restapi.amap.com/v3/place/text"


async def make_gaode_request(params: dict) -> dict[str, Any] | None:
    """向高德地图API发出get请求, 处理错误并返回JSON响应"""
    headers = {"User-Agent": USER_AGENT}
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(
                GAODE_API_BASE, headers=headers, params=params, timeout=30.0
            )
            response.raise_for_status()
            return response.json()
        except Exception:
            return None
