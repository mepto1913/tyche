from django.contrib import admin
from django.urls import path, include

import tyche.urls

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include(tyche.urls)),
]
