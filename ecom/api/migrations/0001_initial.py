from django.db import migrations
from api.user.models import CustomUser

class Migration(migrations.Migration):
    def seed_data(apps,schema_editor):
        user = CustomUser(name = "Lokesh" , email = "tha@lco.dev",is_staff= True, is_superuser = True , phone = "7218509409")
        user.set_password("1253519")
        user.save()

    dependencies = [

    ]
    operations = [
        migrations.RunPython(seed_data),
    ]
