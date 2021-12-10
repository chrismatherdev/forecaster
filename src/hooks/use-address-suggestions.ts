import { useEffect, useState } from 'react';

export function useAddressSuggestions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<Array<{ name: string; longitude: number; latitude: number }>>([]);

  useEffect(() => {
    (async function fetchAddresses() {
      if (searchTerm) {
        try {
          const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${searchTerm}&apiKey=${
              import.meta.env.VITE_GEO_API_API_KEY
            }`,
            {
              method: 'GET',
            },
          );

          const json = await response.json();

          setSuggestions(
            json.features.map((feature: { properties: { formatted: string; lon: number; lat: number } }) => ({
              name: feature.properties.formatted,
              longitude: feature.properties.lon,
              latitude: feature.properties.lat,
            })),
          );
        } catch (error) {
          console.error('Failed to retrieve addresses: ', error);
        }
      }
    })();
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
  };
}
