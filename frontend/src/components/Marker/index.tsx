import { useEffect, useState } from "react";

export const Marker = (options: google.maps.MarkerOptions) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  const infoWindow = new google.maps.InfoWindow({
    content: "hey",
  });

  // useEffect(() => {
  //   if (marker) {
  //     ["click", "idle"].forEach((eventName) =>
  //       google.maps.event.clearListeners(map, eventName)
  //     );

  //     if (onClick) {
  //       map.addListener("click", onClick);
  //     }

  //     if (onIdle) {
  //       map.addListener("idle", () => onIdle(map));
  //     }
  //   }
  // }, [map, onClick, onIdle]);

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
      marker.addListener("click", () => {
        infoWindow.setContent(options.title);
        infoWindow.open(options.map, marker);
      });
    }
  }, [marker, options]);

  return null;
};
