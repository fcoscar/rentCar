from django.db import models
from django.contrib.auth.models import User

class Car(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    type = models.CharField(max_length=100, null=True, blank=True, )
    brand = models.CharField(max_length=100, null=True, blank=True,)
    model = models.CharField(max_length=100, null=True, blank=True, )
    year = models.IntegerField(null=True, blank=True)
    location = models.CharField(max_length=100, null=True, blank=True, )
    exterior = models.CharField(max_length=200, null=True, blank=True)
    interior = models.CharField(max_length=200, null=True, blank=True)
    combustible = models.CharField(max_length=200, null=True, blank=True)
    transmission = models.CharField(max_length=200, null=True, blank=True)
    traccion = models.CharField(max_length=200, null=True, blank=True)
    passengers = models.CharField(max_length=200, null=True, blank=True)
    doors = models.IntegerField(null=True, blank=True)
    kilometraje = models.CharField(max_length=200, null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.name

class Reservation(models.Model):
    car = models.ForeignKey(Car, on_delete=models.SET_NULL, null=True, blank=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    reservationTime = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return 'Reservacion #' + str(self._id)

class Review(models.Model):
    car = models.ForeignKey(Car, on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True)
    comment = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.rating)

class Image(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    image = models.ImageField(null=True, blank=True)

    class Meta:
        ordering = ['-car_id']

    def __str__(self):
        return str(self.car.name)
