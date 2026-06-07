from django.urls import path
from .views import create_resume_view, list_resumes_view, get_resume_view, update_resume_view, delete_resume_view

urlpatterns = [
    path("create/", create_resume_view, name="create_resume"),
    path("list/", list_resumes_view, name="list_resumes"),
    path("get/<int:resume_id>/", get_resume_view, name="get_resume"),
    path("update/<int:resume_id>/", update_resume_view, name="update_resume"),
    path("delete/<int:resume_id>/", delete_resume_view, name="delete_resume"),
]