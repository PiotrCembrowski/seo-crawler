from collections import defaultdict


def naive_cluster(keywords: list[str]) -> dict[str, list[str]]:
    clusters: dict[str, list[str]] = defaultdict(list)
    for kw in keywords:
        key = kw.split(" ")[0].lower()
        clusters[key].append(kw)
    return dict(clusters)
