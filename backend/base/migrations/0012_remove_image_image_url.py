# Generated by Django 4.0.6 on 2022-08-14 17:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_alter_image_options_imageurl'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='image_url',
        ),
    ]
