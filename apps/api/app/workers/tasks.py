from app.workers.celery_app import celery_app


@celery_app.task(bind=True, autoretry_for=(Exception,), retry_backoff=True, max_retries=3)
def process_analysis(self, report_id: int) -> dict:
    return {"report_id": report_id, "status": "processed"}
