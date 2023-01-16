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
    requestOptions: {},
    debounce: 300,
  });
  const ref = useRef();
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
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
