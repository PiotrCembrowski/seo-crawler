from sklearn.feature_extraction.text import TfidfVectorizer


def compute_tfidf_matrix(documents: list[str]) -> tuple[list[str], list[list[float]]]:
    vectorizer = TfidfVectorizer(stop_words="english", ngram_range=(1, 2), max_features=2000)
    matrix = vectorizer.fit_transform(documents)
    terms = vectorizer.get_feature_names_out().tolist()
    return terms, matrix.toarray().tolist()
