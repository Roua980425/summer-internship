from django.form import ModelForm 

from apps.product.models import Product

class ProductForm(ModelForm):
    class Meta:
        model= Product
        fields = ['title', 'category', 'image', 'marcket_price', 'ville_code_postale', 'description', 'numéro']