from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from .resume_logic import create_resume, list_resumes, get_resume_by_id, update_resume_by_id, delete_resume_by_id
from accounts.authentication import SupabaseJWTAuthentication


# Create your views here

#-----------------------------------------------------------------------------------------------------#
# Create Resume View

@api_view(["POST"])
@authentication_classes([SupabaseJWTAuthentication])
@permission_classes([IsAuthenticated])
def create_resume_view(request):
    user = request.user
    data = request.data
    resume_data, errors = create_resume(user, data)
    if errors:
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(resume_data, status=status.HTTP_201_CREATED)


#-----------------------------------------------------------------------------------------------------#
# List Resumes for UserView

@api_view(["GET"])
@authentication_classes([SupabaseJWTAuthentication])
@permission_classes([IsAuthenticated])
def list_resumes_view(request):
    user = request.user
    resumes_data, error = list_resumes(user)
    if error:
        return Response({"error": error}, status=status.HTTP_400_BAD_REQUEST)
    return Response(resumes_data, status=status.HTTP_200_OK)


#-----------------------------------------------------------------------------------------------------#
# Get Resume by ID view

@api_view(["GET"])
@authentication_classes([SupabaseJWTAuthentication])
@permission_classes([IsAuthenticated])
def get_resume_view(request, resume_id):
    user = request.user
    resume_data, error = get_resume_by_id(user, resume_id)
    if error:
        return Response({"error": error}, status=status.HTTP_400_BAD_REQUEST)
    return Response(resume_data, status=status.HTTP_200_OK)


#-----------------------------------------------------------------------------------------------------#
# Update Resume by ID view

@api_view(["PUT"])
@authentication_classes([SupabaseJWTAuthentication])
@permission_classes([IsAuthenticated])
def update_resume_view(request, resume_id, data):
    user = request.user
    resume_data, error = update_resume_by_id(user, resume_id, data)
    if error:
        return Response({"error": error}, status=status.HTTP_400_BAD_REQUEST)
    return Response(resume_data, status=status.HTTP_200_OK)


#-----------------------------------------------------------------------------------------------------#
# Delete Resume by Id VieW

@api_view(["DELETE"])
@authentication_classes([SupabaseJWTAuthentication])
@permission_classes([IsAuthenticated])
def delete_resume_view(request, resume_id):
    user = request.user
    success, error = delete_resume_by_id(user, resume_id)
    if error:
        return Response({"error": error}, status=status.HTTP_404_NOT_FOUND)
    return Response({"message": "Resume deleted successfully."}, status=status.HTTP_200_OK)