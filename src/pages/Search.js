import React from 'react';

import SearchInput from '~/apps/SearchInput/App';

const SearchPage = () => <SearchInput onInput={evt => console.log(evt.key)}/>;

export default SearchPage;

