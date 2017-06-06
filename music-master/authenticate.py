import requests

client_id = 'e71c3ab18d684e999518e9d1fd12d0e0'
client_secret = '7ca29f17e45d4115836b8d9ca5434333'

grant_type = 'client_credentials'
body_params = {'grant_type': grant_type}

url = 'https://accounts.spotify.com/api/token'

response = requests.post(url, data=body_params, auth=(client_id, client_secret))
print(response.json())
