from django.db import models
from django.utils.text import slugify
from django.utils.crypto import get_random_string
# Create your models here.

class Note(models.Model):
    class CategoryChoices(models.TextChoices):
        BUSINESS = 'BUSINESS','Business'
        PERSONAL = 'PERSONAL','Personal'
        IMPORTANT = 'IMPORTANT','Important'

    title = models.CharField(max_length=100)
    body = models.TextField()
    slug = models.SlugField(unique=True, blank=True, null = True)
    category = models.CharField(max_length=50, choices= CategoryChoices.choices, default=CategoryChoices.PERSONAL)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            slug_base = slugify(self.title)
            slug = slug_base
            #ensures slug is unique
            while Note.objects.filter(slug=slug).exists():
                slug = f'{slug_base}-{get_random_string(5)}'
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    