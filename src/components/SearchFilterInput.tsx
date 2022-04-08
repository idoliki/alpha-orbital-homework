import React from 'react';
import { useDebounce } from 'use-debounce';

import { InputText } from '@/ui/inputs';

type Props = {
   initialSearchInput: () => string;
   setSearchDebounce: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFilterInput: React.FC<Props> = ({
   initialSearchInput,
   setSearchDebounce,
}) => {
   const [searchInput, setSearchInput] = React.useState(initialSearchInput);
   const [searchInputDebounced] = useDebounce(
      searchInput.length >= 3 ? searchInput : '',
      500
   );

   React.useEffect(() => {
      setSearchDebounce(searchInputDebounced);
   }, [setSearchDebounce, searchInputDebounced]);

   const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) =>
      setSearchInput(e.target.value);

   return (
      <InputText
         onInput={handleSearchInput}
         value={searchInput}
         placeholder='Type at least 3 characters...'
         name='query'
         id='query'
      />
   );
};

export default SearchFilterInput;
