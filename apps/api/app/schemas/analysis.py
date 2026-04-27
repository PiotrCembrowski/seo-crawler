from pydantic import BaseModel, Field, HttpUrl


class KeywordDensityRequest(BaseModel):
    url: HttpUrl | None = None
    content: str | None = Field(default=None, min_length=30)


class TfidfRequest(BaseModel):
    target_url: HttpUrl | None = None
    target_content: str | None = None
    competitor_urls: list[HttpUrl] = Field(default_factory=list, max_length=10)


class ClusterRequest(BaseModel):
    keywords: list[str] = Field(default_factory=list, min_length=3)
