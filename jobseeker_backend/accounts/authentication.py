import os
from dotenv import load_dotenv
from supabase import create_client
from django.contrib.auth.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from .models import UserProfile

load_dotenv()


def get_supabase_client():
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_ANON_KEY")

    if not supabase_url or not supabase_key:
        raise AuthenticationFailed(
            "Supabase credentials are not configured. "
            "Set SUPABASE_URL and SUPABASE_ANON_KEY."
        )

    return create_client(supabase_url, supabase_key)


class SupabaseJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        header = request.headers.get("Authorization")

        if not header:
            return None
        

        if not header.startswith("Bearer "):
            raise AuthenticationFailed("Invalid token header. No Bearer prefix.")
        
        token = header.split(" ", 1)[1]

        supabase = get_supabase_client()

        try:
            response = supabase.auth.api.get_user(token)
            supabase_user = response.user
        except Exception as e:
            raise AuthenticationFailed(f"Invalid token: {str(e)}")
        
        if not supabase_user:
            raise AuthenticationFailed("Invalid or expired token.")
        

        supabase_user_id = str(supabase_user.id)
        email = supabase_user.email

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
