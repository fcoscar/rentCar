from django.contrib import admin
from .models import *

admin.site.register(Car)
admin.site.register(CarModels)
admin.site.register(CarTypes)
admin.site.register(CarBrands)
admin.site.register(Locations)

# Register your models here.
