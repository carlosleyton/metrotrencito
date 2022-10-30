import http3
import os
import json
from classes.station import Station

client = http3.AsyncClient()

# A dictionary that contains the parameters that the API needs to make the request.
config = {
    "resource_id": "3d54e961-d81b-4507-aeee-7a433e00a9bf",
    "q": "",
    "filters": {},
    "limit": 50,
    "offset": 0
}

async def get_stations():
    """
    It makes a POST request to the API, gets the response, parses it, and returns a list of Station
    objects
    :return: A list of Station objects
    """
    formatted_stations = []
    response = await client.post(os.environ.get('API_URL', 'https://datos.gob.cl/api/3/action/datastore_search'), json = config)
    json_response = json.loads(response.text)
    stations = json_response["result"]["records"]
    for station in stations:
        temporal_station = Station(station["CODIGO"], station["DIRECCION"], station["COMUNA"], station["NOMBRE FANTASIA"], station["HORARIO REFERENCIAL"])
        formatted_stations.append(temporal_station)
    return formatted_stations