from __future__ import annotations

import re
from collections import Counter

STOP_WORDS = {
    "the", "and", "or", "a", "an", "of", "for", "to", "in", "on", "is", "are", "with"
}


def normalize_text(text: str) -> list[str]:
    terms = re.findall(r"[a-zA-Z][a-zA-Z0-9-]+", text.lower())
    return [t for t in terms if t not in STOP_WORDS]


def keyword_density(tokens: list[str]) -> list[dict[str, float | str | int]]:
    total = len(tokens) or 1
    counts = Counter(tokens)
    rows = []
    for keyword, count in counts.most_common(100):
        density = round((count / total) * 100, 2)
        rows.append({"keyword": keyword, "count": count, "density": density})
    return rows
