import React from "react";
import { useGeolocation } from "./geoLocation";

export function LongitudeLatitudeDisplay() {
  const currentLocation = useGeolocation();

  if (!currentLocation) {
    return <p>{"Sorry, location is currently unavailable"}</p>;
  }

  // currentLocation should have a .latitude and .longitude property
  const { latitude, longitude } = currentLocation;

  return (
    <section>
      <p>
        {latitude}° {latitude > 0 ? "N" : "S"}
      </p>
      <hr />
      <p>
        {longitude}° {longitude > 0 ? "E" : "W"}
      </p>
    </section>
  );
}
