import os
from dotenv import load_dotenv
from supabase import create_client


load_dotenv()

supabase = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_ANON_KEY")

)


email = "test@email.com"
password = "test"


response = supabase.auth.sign_in_with_password({
        "email": email,
        "password": password
        })


print(response.session.access_token)