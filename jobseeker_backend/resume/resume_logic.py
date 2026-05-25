from .resume_models import Resume
from .resume_serializer import ResumeCreateSerializer, ResumeDetailSerializer




# Resume CRUD

#Create Resume
def create_resume(user, data):
    serializer = ResumeCreateSerializer(data=data)
    if serializer.is_valid():
        resume = serializer.save(user=user)
        return ResumeDetailSerializer(resume).data, None
    return None, serializer.errors
