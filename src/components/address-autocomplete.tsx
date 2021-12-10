import { FormControl } from '@chakra-ui/react';
import { AutoComplete, AutoCompleteInput, AutoCompleteItem, AutoCompleteList } from '@choc-ui/chakra-autocomplete';
import React, { ChangeEvent } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { useAddressSuggestions, useForecast } from '../hooks';

function AddressAutocomplete() {
  const { setSearchTerm, suggestions } = useAddressSuggestions();
  const { setLocation } = useForecast();

  const debouncedChangeHandler = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, 500);

  function handleSuggestionSelect(value: string) {
    const selectedSuggestion = suggestions.find((suggestion) => suggestion.name === value);

    if (selectedSuggestion) {
      setLocation(selectedSuggestion);
    }
  }

  return (
    <FormControl>
      <AutoComplete onSelectOption={({ item }) => handleSuggestionSelect(item.value)}>
        <AutoCompleteInput onChange={debouncedChangeHandler} placeholder="Search for a location..." />
        <AutoCompleteList>
          {suggestions.map((suggestion) => (
            <AutoCompleteItem key={suggestion.name} value={suggestion.name} />
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </FormControl>
  );
}

export default AddressAutocomplete;
