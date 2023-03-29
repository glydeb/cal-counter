from django.db import models
from django.contrib.auth.models import User

class Plate(models.Model):
    title = models.CharField(max_length=120)
    description = models.TextField()
    time = models.DateTimeField()
    calories = models.IntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def _str_(self):
        return self.title
class FoodItem(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    calories = models.IntegerField()
    protein = models.FloatField()
    fat = models.FloatField()
    carbohydrates = models.FloatField()

class FoodItemConsumption(models.Model):
    food_item = models.ForeignKey(FoodItem, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    meal = models.ForeignKey(Plate, on_delete=models.CASCADE)
    amount = models.FloatField()
