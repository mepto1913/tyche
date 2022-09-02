from django.urls import path

from tyche.views import index, ClassListView

urlpatterns = [
    path('', index, name = 'home'),
    path('manage/classes/', ClassListView.as_view(), name='manage_classes')
]