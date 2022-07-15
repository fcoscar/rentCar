from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .serializers import *

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'GET api/cars'
    ]

    return Response(routes)

@api_view(['GET'])
def getCarsByBrand(request, brand):
    cars = Car.objects.filter(brand__name=brand)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCarsByBrandAndModel(request, brand, model):
    cars = Car.objects.filter(brand__name=brand).filter(model__name=model)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCarsByType(request, tipo):
    cars = Car.objects.filter(type__name=tipo)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCarsByZone(request, zone):
    print(zone)
    cars = Car.objects.filter(location__name=zone)
    serializer = CarSerializer(cars, many=True)
    return Response(serializer.data)