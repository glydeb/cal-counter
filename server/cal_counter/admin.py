from django.contrib import admin
from .models import Plate, FoodItem, FoodItemConsumption
class CalCounterAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'calories', 'time')

admin.site.register(Plate, CalCounterAdmin)