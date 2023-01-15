import { Marker } from "$components/Marker";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React from "react";
import { Children, useEffect, useRef, useState } from "react";

interface IMapBox extends google.maps.MapOptions {
  center: google.maps.LatLngLiteral;
  zoom: number;
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: any;
}

export function MapBox({ children, center, zoom, onClick, onIdle }: IMapBox) {
  const [map, setMap] = useState<google.maps.Map>();
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const ref = useRef();

  useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom }));
    }
  }, [ref, map]);

  useEffect(() => {
    if (map) {
      map.setCenter(center);
      const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
      });
      markers[markers.length - 1].setMap(null);
      marker.setPosition(center);
      marker.setVisible(true);
      setMarkers([...markers, marker]);
    }
  }, [center]);

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }} ref={ref} id="map" />;
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}
