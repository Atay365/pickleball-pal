import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";
import "./Map.scss";
import Courts from "../Courts/Courts";
import Loading from "../../components/Loading/Loading";
import mapMarker from "../../assets/icons/pickleball-map-marker.png";

const api_key = "AIzaSyBGp-ib05S9Wua9xWD6QYcz3khIWJ4CLPc";
const baseURL = import.meta.env.VITE_API_URL;

const Map = () => {
  const [mapData, setMapData] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    const renderMap = async () => {
      const loader = new Loader({
        apiKey: api_key,
        version: "weekly",
        libraries: ["places"],
      });
      loader.load().then(async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const userCoords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              const map = new window.google.maps.Map(mapRef.current, {
                center: userCoords,
                zoom: 11,
              });
              new window.google.maps.Marker({
                position: userCoords,
                map: map,
                title: "Current Location",
              });

              const courts = await fetchPickleballCourts(userCoords);
              courts.forEach((court) => createMarker(court, map));
            },
            (error) => {
              console.log(error);
            }
          );
        } else {
          console.log("Geolocation not supported");
        }
      });
    };

    // ! Section below not working due to Cors, need backend server

    const fetchPickleballCourts = async (userCoords) => {
      const response = await axios.get(`${baseURL}/api/nearbysearch`, {
        params: {
          location: `${userCoords.lat}, ${userCoords.lng}`,
          radius: "10000",
          keyword: "pickleball court",
        },
      });
      setMapData(response.data.results);

      console.log(response.data.results);
      if (response.data.status === "OK") {
        return response.data.results;
      } else {
        throw new Error(response.data.status);
      }
    };

    const createMarker = (place, map) => {
      const marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: {
          url: { mapMarker },
        },
      });

      const infoWindowCustom = `
      <div className="info-window">
        <p className="info-window__name"><strong>${place.name}</strong></p>
        <p className="info-window__vicinity">${place.vicinity}</p>
      </div>`;

      const infowindow = new window.google.maps.InfoWindow({
        content: infoWindowCustom,
      });
      marker.addListener("click", () => {
        infowindow.open(map, marker);
      });
    };

    renderMap();
  }, []);

  return (
    <main className="court-map__container">
      <div className="court-map" ref={mapRef}>
        <Loading />
      </div>
      <div className="court-list">
        <Courts mapData={mapData} />
      </div>
    </main>
  );
};

export default Map;
