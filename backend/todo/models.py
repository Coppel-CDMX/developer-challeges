from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class OwnedModel(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True


class Task(OwnedModel):
    task = models.CharField(max_length=50)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.task
