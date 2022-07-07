from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import UserManager

class Profile(models.Model):
    prouser = models.OneToOneField(User,on_delete=models.CASCADE)
    image = models.ImageField(upload_to="profile/",blank=True, null=True)
    def __str__(self):
        return self.prouser.username

class Category(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    def __str__(self):
        return self.title

class Product(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    category=models.ForeignKey(Category,on_delete=models.SET_NULL,blank=True,null=True)
    image = models.ImageField(upload_to="products/")
    marcket_price=models.PositiveIntegerField()
    ville_code_postale=  models.TextField()
    description = models.TextField()
    numéro=models.PositiveIntegerField()
   # objects = UserManager()
    
    def __str__(self):
        return self.title

class Article(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    category=models.ForeignKey(Category,on_delete=models.SET_NULL,blank=True,null=True)
    image = models.ImageField(upload_to="article/")
    marcket_price=models.PositiveIntegerField()
    ville_code_postale=  models.TextField()
    description = models.TextField()
    numéro=models.PositiveIntegerField()
    
    def __str__(self):
        return self.title


class Cart(models.Model):
    customer= models.ForeignKey(Profile,on_delete=models.Case)
    total= models.PositiveIntegerField()
    complit= models.BooleanField(default=False)
    date= models.DateField(auto_now_add=True)
    def __str__(self):
        return f"cart id=={self.id}==complit=={self.complit}"

class cartProduct(models.Model):
    cart= models.ForeignKey(Cart,on_delete=models.CASCADE)
    product= models.ManyToManyField(Product)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField()
    subtotal = models.PositiveIntegerField()
    def __str__(self):
        return f"Cart=={self.cart.id}==CartProduct{self.id}==Quantity=={self.quantity}"

ORDER_STATUS={
  ("Order Reseived","Order Reseived"),
  ("Order Processing","Order Processing"),
  ("on the way","on the way"),
  ("Order Completed","Order Completed"),
  ("Order Canceled", "Order Canceled")
}

class Order(models.Model):
    cart= models.OneToOneField(Cart,on_delete=models.CASCADE)
    address=models.CharField(max_length=250)
    mobile=models.CharField(max_length=16)
    email=models.CharField(max_length=100)
    discount= models.PositiveIntegerField()
    order_status= models.CharField(max_length=22, choices=ORDER_STATUS,default="Order Reseived")
    date = models.DateField(auto_now_add=True)
    payment= models.BooleanField(default=False)
   