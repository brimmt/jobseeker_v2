from .resume_models import Resume
from .resume_serializer import ResumeCreateSerializer, ResumeDetailSerializer




# Resume CRUD

#Create Resume
# This initializes the Serializer with the data from the request, checks if it's valid, and if so, saves it to the database. The created resume is then serialized again using the ResumeDetailSerializer to return a detailed response. If the data is invalid, it returns the errors instead.
def create_resume(user, data):
    serializer = ResumeCreateSerializer(data=data)
    if serializer.is_valid():
        resume = serializer.save(user=user)
        return ResumeDetailSerializer(resume).data, None
    return None, serializer.errors



# Get Resume all resumes for a user
def list_resumes(user):
    if not user.is_authenticated:
        return None, "Authentication required."
    resumes = Resume.objects.filter(user=user).order_by("-created_at")
    serializer = ResumeDetailSerializer(resumes, many=True)
    return serializer.data, None


# Get Resume by ID
def get_resume_by_id(user, resume_id):
    try:
        resume = Resume.objects.get(id=resume_id, user=user)
        serializer = ResumeDetailSerializer(resume)
        return serializer.data, None
    except Resume.DoesNotExist:
        return None, "Resume not found."

# Update Resume by ID
def update_resume_by_id(user, resume_id, data):
    try:
        resume = Resume.objects.get(id=resume_id, user=user)
        serializer = ResumeDetailSerializer(resume, data=data, partial=True)
        if serializer.is_valid():
            updated_resume = serializer.save()
            return ResumeDetailSerializer(updated_resume).data, None
        return None, serializer.errors
    except Resume.DoesNotExist:
        return None, "Resume not found."



# Delete Resume by ID 

def delete_resume_by_id(user, resume_id):
    try:
        resume = Resume.objects.get(id=resume_id, user=user)
        resume.delete()
        return True, None
    except Resume.DoesNotExist:
        return None, "Resume not found."
       