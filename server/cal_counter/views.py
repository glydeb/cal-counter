from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PlateSerializer
from .models import Plate

class PlateView(viewsets.ModelViewSet):
    serializer_class = PlateSerializer
    queryset = Plate.objects.all()