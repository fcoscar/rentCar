from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)
from .views import MyTokenObtainPairView

urlpatterns = [
    path('', views.getRoutes),
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register/', views.createUser),
    path('car/register/', views.createCar),
    path('car/<str:pk>/', views.getCarById),
    path('car/register/car-created', views.carCreated),
    path('car/register/upload-image/', views.uploadCarImageUrl),
    path('brands', views.getBrands),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('all', views.getAllCars),
    path('<str:brand>', views.getCarsByBrand),
    path('<str:brand>/<str:model>', views.getCarsByBrandAndModel),
    path('<str:tipo>/', views.getCarsByType),
    path('<str:zone>', views.getCarsByZone),

]