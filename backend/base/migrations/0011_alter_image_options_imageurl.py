# Generated by Django 4.0.6 on 2022-08-14 17:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0010_image_image_url'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='image',
            options={},
        ),
        migrations.CreateModel(
            name='ImageUrl',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_url', models.TextField(blank=True, null=True)),
                ('car', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='base.car')),
            ],
            options={
                'ordering': ['-car_id'],
            },
        ),
    ]