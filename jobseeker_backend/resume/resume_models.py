from django.db import models

class Resume(models.Model):
    SOURCE_CHOICES = [
        ("upload", "Upload"),
        ("scratch", "Create from Scratch"),
    ]

    DOCUMENT_TYPE_CHOICES = [
        ("resume", "Resume"),
        ("cv", "CV"),
    ]

    TEMPLATE_TYPE_CHOICES = [
        ("classic", "Classic"),
        ("modern", "Modern"),
        ("creative", "Creative"),
    ]


    user = models.ForeignKey("auth.User", on_delete=models.CASCADE, related_name="resumes")
    title = models.CharField(max_length=155)

    content = models.JSONField(default=dict, blank=True)
    source = models.CharField(max_length=20, choices=SOURCE_CHOICES, default="scratch")
    template_type = models.CharField(max_length=50, choices=TEMPLATE_TYPE_CHOICES, default="classic")
    document_type = models.CharField(max_length=20, choices=DOCUMENT_TYPE_CHOICES, default="resume")

    file_url = models.URLField(blank=True, null=True)

    storage_path = models.CharField(max_length=255, blank=True, null=True)
    enhancement_count = models.PositiveIntegerField(default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

