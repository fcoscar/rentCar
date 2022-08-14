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
    user = User.objects.create(
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['username'],
        email=data['email'],
        password=make_password(data['password'])
    )
    serializer = UserSerializerWithToken(user, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def createCar(request):
    data = request.data
    user = request.user
    car = Car.objects.create(
        user=user,
        name=data['brand'] + ' ' + data['model'],
        brand=data['brand'],
        location=data['location'],
        year=data['year'],
        price=data['price'],
        combustible=data['combustible'],
        type=data['type']
    )
    serializer = CarSerializer(car, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def carCreated(request):
    user = request.user
    car = Car.objects.filter(user__username=user.username)[0]
    serializer = CarSerializer(car, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def uploadCarImage(request):
    data = request.data
    user = request.user
    car = Car.objects.filter(user=user)[0]
    image = Image.objects.create(
        car=car,
        image_url=data['image']
    )
    return Response('Image Uploaded')

@api_view(['POST'])
def uploadCarImageUrl(request):
    data = request.data
    user = request.user
    car = Car.objects.filter(user=user)[0]
    image = ImageUrl.objects.create(
        car=car,
        image_url=data['image']
    )
    return Response('Image Uploaded')


@api_view(['GET'])
def getAllCars(request):
    brand = request.GET.get('brand') if request.GET.get('brand') is not None else ''
    if brand == 'All':
        cars = Car.objects.all().order_by('-id')
        images = ImageUrl.objects.all().order_by('-car_id')
        serializer = CarSerializer(cars, many=True)
        serializer2 = ImageUrlSerializer(images, many=True)
        serializerList = [serializer.data, serializer2.data]
        return Response(serializerList)

    else:
        cars = Car.objects.filter(
            Q(brand__icontains=brand)
        )
        images = ImageUrl.objects.filter(
            Q(car__brand__contains=brand)
        )
        serializer = CarSerializer(cars, many=True)
        serializer2 = ImageUrlSerializer(images, many=True)
        serializerList = [serializer.data, serializer2.data]
        return Response(serializerList)
@api_view(['GET'])
def getBrands(request):
    cars = Car.objects.all()
    brands = {car.brand for car in cars}
    return Response(brands)
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


@api_view(['GET'])
def getCarById(request, pk):
    car = Car.objects.get(id=pk)
    images = ImageUrl.objects.get(car_id=pk)
    serializer = CarSerializer(car, many=False)
    serializer2 = ImageUrlSerializer(images, many=False)
    serializerList = {'details': serializer.data, 'image': serializer2.data}
    return Response(serializerList)
