export const isSearched = searchTerm => item =>
  item.searchedElement.toLowerCase().includes(searchTerm.toLowerCase());
