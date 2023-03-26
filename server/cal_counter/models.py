from django.db import models

class Plate(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    calories = models.IntegerField()

    def _str_(self):
        return self.title