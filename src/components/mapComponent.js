import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { useSelector } from "react-redux";

const mapComponent = () => {
  const mapname = useSelector((state) => state.country);
  const [mapdata, setMapData] = useState([20.593684, 78.96288, "India"]);
  useEffect(() => {
    const fetchMap = async () => {
      const res = await fetch(`https://photon.komoot.io/api/?q=${mapname}`);
      const data = await res.json();
      const coordinateOne = data.features[0].geometry.coordinates[1];
      const coordinateTwo = data.features[0].geometry.coordinates[0];
      const { country } = data.features[0].properties;
      setMapData([coordinateOne, coordinateTwo, country]);
    };
    fetchMap();
  }, [mapname]);
  return (
    <MapContainer
      center={[mapdata[0], mapdata[1]]}
      zoom={4}
      scrollWheelZoom={false}
      className="leaf-map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[mapdata[0], mapdata[1]]}>
        <Circle center={[mapdata[0], mapdata[1]]} radius={200000}>
          <Popup>{mapdata[2]}</Popup>
        </Circle>
      </Marker>
    </MapContainer>
  );
};

export default mapComponent;
