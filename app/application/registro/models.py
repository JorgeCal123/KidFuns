from django.db import models
# Create your models here.

class User(models.Model):
    pais = models.CharField(max_length=50)
    nombre = models.CharField(max_length=100, blank=True, default='')
    email = models.EmailField(max_length=20)
    contraseña = models.CharField(max_length=50)
    
