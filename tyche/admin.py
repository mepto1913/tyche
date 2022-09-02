from django.contrib import admin

from tyche.models import *


class StudentAdmin(admin.ModelAdmin):
    list_display = ['name']


class ClassAdmin(admin.ModelAdmin):
    list_display = ['name']


class ExamAdmin(admin.ModelAdmin):
    list_display = ['nr', 'subject', 'klass']


admin.site.register(Student, StudentAdmin)
admin.site.register(Class, ClassAdmin)
admin.site.register(Exam, ExamAdmin)
