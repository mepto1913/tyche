from django.forms import ModelForm

from tyche.models import Class


class ClassForm(ModelForm):
    class Meta:
        model = Class
        fields = '__all__'