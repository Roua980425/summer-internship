from rest_framework.response import Response
from rest_framework import views,viewsets,generics,mixins
from .models import *
from .serializers import *
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.generics import  CreateAPIView



#class ArticleListView(ListAPIView):
 #   queryset=Article.objects.all()
  #  serializer_class=ArticleSeializer

#class ArticleDetailView(RetrieveAPIView):
 #   queryset = Article.objects.all()
  #  serializer_class = ArticleSeializer

class ProductView(generics.GenericAPIView,mixins.ListModelMixin, mixins.RetrieveModelMixin):
    
    queryset= Product.objects.all().order_by("-id")
    serializer_class=ProductsSerializer
    lookup_field="id"
    def get(self,request,id=None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
    def post(self,request):
        serializers = ProductsSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({"error":False,"message":f"True"})
        return Response({"error":True,"message":"False"})

   
        
    

class CategoryView(viewsets.ViewSet):
    def list(self,request):
        query=Category.objects.all().order_by("-id")
        serializers=CategorySerializer(query,many=True)
        return Response(serializers.data)
    def retrieve(self,request,pk=None):
        query = Category.objects.get(id=pk)
        serializers = CategorySerializer(query)
        data_data = serializers.data
        all_data = []
        catagory_product = Product.objects.filter(category_id=data_data['id'])
        catagory_product_serializer = ProductsSerializer(catagory_product,many=True)
        data_data['category_product'] = catagory_product_serializer.data
        all_data.append(data_data)
        return Response(all_data)

class ProfileView(views.APIView):
    authentication_classes=[TokenAuthentication, ]
    permission_classes = [IsAuthenticated, ]
    def get(self,request):
        try:
            query = Profile.objects.get(prouser=request.user)
            serializer = ProfileSerializers(query)
            response_message = {"error":False,"data":serializer.data}
        except:
            response_message = {"error":True,"message":"Somthing is Wrong"}
        return Response(response_message)
    
class Updateuser(views.APIView):
    permission_classes=[IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def post(self,request):
        try:
            user = request.user
            data = request.data
            user_obj = User.objects.get(username=user)
            user_obj.first_name = data["first_name"]
            user_obj.last_name = data["last_name"]
            user_obj.email = data["email"]
            
            user_obj.save()
            response_data = {"error":False,"message":"User Data is Updated"}
        except:
            response_data = {"error":True,"message":"User Data is not Update Try agane !"}
        return Response(response_data)

class Updateprofile(views.APIView):
    permission_classes=[IsAuthenticated, ]
    authentication_classes=[TokenAuthentication, ]
    def post(self,request):
        try:
            user = request.user
            query = Profile.objects.get(prouser=user)
            data = request.data
            serializers = ProfileSerializers(query,data=data,context={"request":request})
            serializers.is_valid(raise_exception=True)
            serializers.save()
            return_res={"message":"Profile is Updated"}
        except:
            return_res={"message":"Somthing is Wrong Try Agane !"}
        return Response(return_res)

class RegisterView(views.APIView):
    def post(self,request):
        serializers =UserSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({"error":False,"message":f"user is created for '{serializers.data['username']}' ","data":serializers.data})
        return Response({"error":True,"message":"A user with that username already exists! Try Anather Username"})

#class ArticleCreateView(CreateAPIView):
 #   queryset = Article.objects.all()
  #  serialize_class=ArticleSerializer
   # permission_classes=[IsAuthenticated, ]

class ArticleCreateView(views.APIView):
    def post(self,request):
        serializers =ArticleSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response({"error":False,"message":f"user is created for '{serializers.data['username']}' ","data":serializers.data})
        return Response({"error":True,"message":"A user with that username already exists! Try Anather Username"})

#class ArticleViewSet(viewsets.ModelViewSet):
 #   def list(self,request):
  #      query = Article.objects.all()
   #     serializers=ArticleSerializer(query,many=True)
    #    return Response(serializers.data)

class ArticleViewSet(viewsets.ModelViewSet):
    queryset=Article.objects.all().order_by('-id')
    serializer_class=ArticleSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset=Product.objects.all().order_by('-id')
    serializer_class=ProductsSerializer

    