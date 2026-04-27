from fastapi import APIRouter
from app.schemas.analysis import ClusterRequest, KeywordDensityRequest, TfidfRequest
from app.services.text_processing import keyword_density, normalize_text
from app.services.tfidf_service import compute_tfidf_matrix
from app.services.cluster_service import naive_cluster

router = APIRouter()


@router.post("/keyword-density")
def run_keyword_density(payload: KeywordDensityRequest) -> dict:
    content = payload.content or ""
    tokens = normalize_text(content)
    rows = keyword_density(tokens)
    warnings = {
        "stuffing": [r for r in rows if r["density"] > 3],
        "under_optimized": len(rows) < 15,
    }
    return {"keywords": rows, "warnings": warnings}


@router.post("/tfidf")
def run_tfidf(payload: TfidfRequest) -> dict:
    docs = [payload.target_content or ""] + [str(u) for u in payload.competitor_urls]
    terms, matrix = compute_tfidf_matrix(docs)
    return {"terms": terms[:50], "matrix": matrix}


@router.post("/semantic-clustering")
def run_clustering(payload: ClusterRequest) -> dict:
    clusters = naive_cluster(payload.keywords)
    return {"clusters": clusters, "pillar_topics": list(clusters.keys())}
