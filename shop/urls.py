from shop.views import ProductView
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import*
from rest_framework.response import Response
from .views import ArticleViewSet
from .views import ProductViewSet

route = routers.DefaultRouter()
route.register("categori",CategoryView,basename="CategoryView")
route.register("article", ArticleViewSet, basename='articles')
route.register("product", ProductViewSet, basename='products')

urlpatterns = [
    path("",include(route.urls)),
    path('product/',ProductView.as_view(),name="product"),
    path('product/<int:id>/',ProductView.as_view(),name="product"),
    path("profile/",ProfileView.as_view(),name="profile"),   
    path("register/",RegisterView.as_view(),name="register"),
    path("updateuser/",Updateuser.as_view(),name="updateuser"),
    path("updateprofile/",Updateprofile.as_view(),name="updateprofile"),
    #path('addStudent', views.addStudent, name='add-student'),
   # path('create/',CreateView.as_view(),name="create"),
    #path('article/', ArticleCreateView.as_view())
]
