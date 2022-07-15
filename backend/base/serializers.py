from .models import *
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User

class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class CarModelsSerializer(ModelSerializer):
    class Meta:
        model = CarModels
        fields = '__all__'

class CarBrandsSerializer(ModelSerializer):
    class Meta:
        model = CarBrands
        fields = '__all__'

class CarTypesSerializer(ModelSerializer):
    class Meta:
        model = CarTypes
        fields = '__all__'

class ReservationsSerializer(ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'