from django.shortcuts import render
from django.views.generic import ListView

from tyche.forms import ClassForm
from tyche.models import Class


def index(request):
    return render(request, 'index.html')


class ClassListView(ListView):
    paginate_by = 20
    model = Class
    template_name = 'manage_classes.html'
    ordering = ['-id']

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        return context
