from rest_framework import serializers
from .models import UserProfile
from django.contrib.auth.models import User


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'supabase_user_id',
            'plan',
            'created_at',
            'updated_at',
        ]
        read_only_fields = [
            'supabase_user_id', 
            'created_at', 
            'updated_at',
            ]
        


class CurrentUserProfileSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'profile',
        ]

        read_only_fields = fields