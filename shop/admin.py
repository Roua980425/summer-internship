from django.contrib import admin

from .models import *

admin.site.register(Profile)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(cartProduct)
admin.site.register(Order)
admin.site.register(Article)

