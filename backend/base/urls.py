from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes),
    path('<str:brand>/', views.getCarsByBrand),
    path('<str:brand>/<str:model>', views.getCarsByBrandAndModel),
    path('<str:tipo>/', views.getCarsByType),
    path('<str:zone>', views.getCarsByZone),

]