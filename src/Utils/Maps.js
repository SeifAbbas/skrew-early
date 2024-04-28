import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ maps, map, lat, lng, onDrag }) => {
  useEffect(() => {
    const marker = new maps.Marker({
      position: { lat, lng },
      map,
      draggable: true,
    });

    marker.addListener("dragend", (event) => {
      onDrag(event.latLng.lat(), event.latLng.lng());
    });

    return () => {
      marker.setMap(null);
    };
  }, [maps, map, lat, lng, onDrag]);

  return null;
};

const SimpleMap = ({ activeUser, inputFields, setInputFields }) => {
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);

  const defaultProps = {
    center: {
      lat: 29.9867332476986,
      lng: 31.439458208084083,
    },
    zoom: 11,
  };

  const handleApiLoaded = (map, maps) => {
    setMap(map);
    setMaps(maps);
    setMapsLoaded(true);
  };

  const handleMarkerDrag = async (lat, lng) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_GEOCODING_API_KEY}`
    );
    const data = await response.json();

    let newInputFields = [...inputFields];
    if (activeUser === "Organization") {
      newInputFields.find(
        (field) => field.name === "Organization Address"
      ).value = data.results[0].formatted_address;
    } else {
      newInputFields.find((field) => field.name === "Address").value =
        data.results[0].formatted_address;
    }

    setInputFields([...newInputFields]);
  };

  return (
    <div style={{ height: "400px", width: "400px", marginRight: "30px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`,
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        {mapsLoaded ? (
          <Marker
            maps={maps}
            map={map}
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            onDrag={handleMarkerDrag}
          />
        ) : null}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
