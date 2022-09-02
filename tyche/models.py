from django.db import models


class Student(models.Model):
    first_name = models.CharField(max_length=100, default="")
    last_name = models.CharField(max_length=100, default="")

    @property
    def name(self):
        return f"{self.first_name} {self.last_name}"


class Class(models.Model):
    name = models.CharField(max_length=100, default="")
    students = models.ManyToManyField(Student)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=100)


class Task(models.Model):
    name = models.CharField(max_length=100)
    points = models.IntegerField(default=0)
    bonus = models.BooleanField(default=False)
    order = models.IntegerField(default=0)


class Exam(models.Model):
    nr = models.IntegerField(default=1)
    subject = models.ForeignKey(Subject, on_delete=models.SET_NULL, null=True)
    tasks = models.ManyToManyField(Task)
    klass = models.ForeignKey(Class, on_delete=models.SET_NULL, null=True)
