from django.db import models
# Create your models here.

class User(models.Model):
    pais = models.CharField(auto_now_add=True)
    nombre = models.CharField(max_length=100, blank=True, default='')
    email = models.EmailField()
    contraseña = models.CharField(default=False)
    

    class Meta:
        ordering = ['created']