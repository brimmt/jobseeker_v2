from django.db import models
from django.contrib.auth.models import User 
# Create your models here.


class UserProfile(models.Model):
    PLAN_CHOICES = [
        ('free', 'Free'),
        ('pro', 'Pro'),
        ('premium', 'Premium'),
    ]

    
    user = models.OneToOneField (
        User, 
        on_delete=models.CASCADE,
        related_name='profile')
    
    supabase_user_id = models.CharField(max_length=255, unique=True)
    plan = models.CharField(max_length=20, choices=PLAN_CHOICES, default='free')


    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    