from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from resume_logic import create_resume



# Create your views here

@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_resume_view(request):
    user = request.user
    data = request.data
    resume_data, errors = create_resume(user, data)
    if errors:
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(resume_data, status=status.HTTP_201_CREATED)
