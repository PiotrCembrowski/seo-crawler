from openai import OpenAI
from app.core.config import settings


def generate_recommendations(context: str) -> str:
    if not settings.OPENAI_API_KEY:
        return "OpenAI key missing. Configure OPENAI_API_KEY to enable AI recommendations."

    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    response = client.responses.create(
        model="gpt-4.1-mini",
        input=[{"role": "user", "content": f"Generate actionable SEO recommendations:\n{context}"}],
    )
    return response.output_text
