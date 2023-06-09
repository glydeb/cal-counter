from rest_framework import serializers
from .models import Plate

class PlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = ('id', 'title', 'description', 'calories', 'time', 'user')