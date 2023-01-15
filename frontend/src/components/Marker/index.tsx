import { useEffect, useState } from "react";

export const Marker = (options: google.maps.MarkerOptions) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  const contentString =
    '<div id="content" styles="backgroung-color: #000;">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";

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
        console.log(infoWindow);
        infoWindow.open(options.map, marker);
      });

      // google.maps.event.addListener(marker, "click", (marker, i) => {
      //   return () => {

      //   };
      // });
    }
  }, [marker, options]);

  return null;
};
