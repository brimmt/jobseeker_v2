from django.urls import path
from .views import MeView, signup, signin

urlpatterns = [
    path("me/", MeView.as_view(), name="me"),
    path("signup/", signup, name="signup"),
    path("login/", signin, name="login")
]