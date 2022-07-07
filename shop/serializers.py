from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model

from rest_framework.authtoken.models import Token



  
class Geeks(object):
    def __init__(self, choices, multiplechoices):
        self.choices = choices
        self.multiplechoices = multiplechoices
  
# create a tuple
GEEKS_CHOICES =( 
    ("1", ""), 
    ("2", "Two"), 
    ("3", "Three"), 
    ("4", "Four"), 
    ("5", "Five"), 
)
  
# create a serializer
class GeeksSerializer(serializers.Serializer):
    # initialize fields
    choices = serializers.ChoiceField(
                        choices = GEEKS_CHOICES)
    multiplechoices = serializers.MultipleChoiceField(
                        choices = GEEKS_CHOICES)

class ProductsSerializer(serializers.ModelSerializer):
    #choices = serializers.ChoiceField(
     #                   choices = GEEKS_CHOICES)
    #multiplechoices = serializers.MultipleChoiceField(
     #                   choices = GEEKS_CHOICES)
    class Meta:
        model=Product
        #fields=("title","category","image","marcket_price","ville_code_postale","description","numéro")
        fields="__all__"
        depth = 1
    #def create(self,validated_data):
     #   product = Product.objects.create_product(**validated_data)
      #  Token.objects.create(product=product)
       # Profile.objects.create(prouser=product)
        #return product
    
class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Article
        fields=("title","category","image","marcket_price","ville_code_postale","description","numéro")
   

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model=Category
        fields="__all__"

User = get_user_model()
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id",'username','password','first_name','last_name','email','annonce')
        extra_kwargs = {'password':{'write_only':True,'required':True}}
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        Profile.objects.create(prouser=user)
        return user

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"
        read_only_fields = ['prouser']

    def validate(self,attrs):
        attrs['prouser'] = self.context['request'].user
        return attrs

    def to_representation(self,instance):
        response = super().to_representation(instance)
        response['prouser'] = UserSerializer(instance.prouser).data
        return response