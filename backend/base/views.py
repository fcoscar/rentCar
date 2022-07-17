from django.contrib.auth.hashers import make_password
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.db.models import Q


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['name'] = user.first_name + ' ' + user.last_name
        token['email'] = user.email
        # ...

        return token

    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for k, v in serializer.items():
            data[k] = v

        return data
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET api/cars'
    ]

    return Response(routes)
@api_view(['POST'])
def createUser(request):
    data = request.data
    print(data)
    user = User.objects.create(
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['username'],
        email=data['email'],
        password=make_password(data['password'])
    )
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getAllCars(request):
    brand = request.GET.get('brand') if request.GET.get('brand') is not None else ''
    if brand == 'All':
        cars = Car.objects.all()
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

    else:
        cars = Car.objects.filter(
            Q(brand__icontains=brand)
        )
        serializer = CarSerializer(cars, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def getCarsByBrand(request, brand):
    cars = Car.objects.filter(brand=brand)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCarsByBrandAndModel(request, brand, model):
    cars = Car.objects.filter(brand=brand).filter(model=model)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCarsByType(request, tipo):
    cars = Car.objects.filter(type=tipo)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCarsByZone(request, zone):
    cars = Car.objects.filter(location=zone)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)