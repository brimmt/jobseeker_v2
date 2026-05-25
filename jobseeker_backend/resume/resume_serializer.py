from .resume_models import Resume
from rest_framework import serializers


class ResumeCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = [
            "title",
            "content",
            "source",
            "document_type",
        ]




class ResumeListSerializer(serializers.ModelSerializer):
        class Meta:
            model = Resume
            fields = [
                "id",
                "title",
                "source",
                "document_type",
                "enhancement_count",
                "created_at",
                "updated_at",
            ]
            read_only_fields = fields



class ResumeDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Resume

        fields = [
            "id",
            "title",
            "content",
            "source",
            "document_type",
            "file_url",
            "storage_path",
            "enhancement_count",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "enhancement_count",
            "created_at",
            "updated_at",
        ]
    


