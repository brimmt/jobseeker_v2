from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
import supabase
from .serializers import CurrentUserProfileSerializer, LoginInSerializer, SignUpSerializer
from rest_framework import status

class MeView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = CurrentUserProfileSerializer(request.user)
        return Response(serializer.data)

 



@api_view(["POST"])
@permission_classes([AllowAny])
def signup(request):
    serializer = SignUpSerializer(data=request.data)

    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    data = serializer.validated_data

    try:
        auth_response = supabase.auth.sign_up({
            "email": data["email"],
            "password": data["password"],
            "options": {
                "data": {
                    "first_name": data["first_name"],
                    "last_name": data["last_name"],
                    "plan": data["plan"],
                }
            }
        })

        if not auth_response.user:
            return Response(
                {"detail": "Unable to create user."},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {
                "message": "Signup successful. Please check your email to verify your account.",
                "user": {
                    "id": auth_response.user.id,
                    "email": auth_response.user.email,
                }
            },
            status=status.HTTP_201_CREATED
        )

    except Exception as e:
        return Response(
            {"detail": "Signup failed."},
            status=status.HTTP_400_BAD_REQUEST
        )
 


@api_view(["POST"])
@permission_classes([AllowAny])
def signin(request):
    serializer = LoginInSerializer(data=request.data)    #I don't know why im adding this, i guess im validating that this is an actual serilizer

    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    data = serializer.validated_data

    try:
        auth_response = supabase.auth.sign_in_with_password({
            "email": data["email"],
            "password": data["password"]
        })

        if not auth_response.session:
            return Response(
                {"detail": "Invalid credentials."},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        return Response({
            "message": "Sign in successful",
            "access_token": auth_response.session.access_token,
            "refresh_token": auth_response.session.refresh_token,
        })
    except Exception:
        return Response({
            "detail": "Login failed."
        }, status=status.HTTP_400_BAD_REQUEST)


#I know auth header also goes somethere here since the user is being logged in i THINk this si where i'd have  supbase create the JWT token. 
