# accounts/authentication.py

import os
import requests
from dotenv import load_dotenv

from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

from .models import UserProfile


load_dotenv()

SUPABASE_URL = os.environ["SUPABASE_URL"]
SUPABASE_ANON_KEY = os.environ["SUPABASE_ANON_KEY"]


class SupabaseJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        header = request.headers.get("Authorization")

        if not header:
            return None

        if not header.startswith("Bearer "):
            raise AuthenticationFailed("Invalid authorization header.")

        token = header.split(" ", 1)[1]

        supabase_user = self.verify_token_with_supabase(token)

        supabase_user_id = str(supabase_user["id"])
        email = supabase_user["email"]

        profile = UserProfile.objects.filter(
            supabase_user_id=supabase_user_id
        ).select_related("user").first()

        if profile:
            return (profile.user, None)

        user = User.objects.create_user(
            username=email,
            email=email,
        )
        user.set_unusable_password()
        user.save()

        UserProfile.objects.create(
            user=user,
            supabase_user_id=supabase_user_id,
        )

        return (user, None)

    def verify_token_with_supabase(self, token):
        url = f"{SUPABASE_URL}/auth/v1/user"

        headers = {
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": f"Bearer {token}",
        }

        response = requests.get(url, headers=headers)

        if response.status_code != 200:
            raise AuthenticationFailed("Invalid or expired token.")

        return response.json()
    

    
