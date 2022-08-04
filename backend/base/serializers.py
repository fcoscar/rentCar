from rest_framework import serializers

from .models import *
from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken

class UserSerializer(ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name','name', 'username', 'email', 'isAdmin']

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        return obj.first_name + ' ' + obj.last_name

class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'name', 'username', 'email', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj) #
        return str(token.access_token)

class CarSerializer(ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class ReservationsSerializer(ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'

class ImageSerializer(ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'