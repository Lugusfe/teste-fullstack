import { TextInput } from "$components/Input";
import { Ubuntu } from "@next/font/google";
import Script from "next/script";
import { useRef } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import styles from "./GeocudeInput.module.scss";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "300",
});

interface IGeocodingInput {
  onNewLatLng: (LatLng: google.maps.LatLngLiteral) => void;
}

export const GeocodingInput = (props: IGeocodingInput) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useRef();

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        props.onNewLatLng({ lat, lng });
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={handleSelect(suggestion)}
          className={styles.suggestionOption}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <>
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_GOOGLE_KEY}&libraries=places&v=3.exp`}
        async
      />
      <div className={ubuntu.className} ref={ref}>
        <TextInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          className={styles.input}
          placeholder="Endereço do cliente"
        />
        {status === "OK" && (
          <ul className={styles.suggestionContainer}>{renderSuggestions()}</ul>
        )}
      </div>
    </>
  );
};

// export const GeocodingInput = () => {
//   const geocodingRef = useRef<HTMLInputElement>();

//   const initGeocoding = () => {
//     const autocomplete = new google.maps.places.Autocomplete(
//       geocodingRef.current,
//       {
//         fields: ["address_components", "formatted_address"],
//         strictBounds: false,
//         types: ["address"],
//       }
//     );
//     console.log("init");
//     // Fire Event when a suggested name is selected
//     autocomplete.addListener("place_changed", () => {
//       handlePlaceSelect(autocomplete);
//     });
//   };

//   const handlePlaceSelect = (autocomplete: google.maps.places.Autocomplete) => {
//     // Extract City From Address Object
//     const addressObject = autocomplete.getPlace();
//     const address = addressObject.address_components;

//     console.log("search");
//     // Check if address is valid
//     if (address) {
//       // Set State
//       console.log("address", address);
//       console.log("addressObject", addressObject);
//     }
//   };

//   return (
//     <>
//       <input type="text" className={styles.input} ref={geocodingRef} />

// <Script
//   src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_GOOGLE_KEY}&libraries=places&v=3.exp`}
//   async
//   onLoad={initGeocoding}
// />
//     </>
//   );
// };
