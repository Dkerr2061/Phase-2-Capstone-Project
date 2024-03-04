
function Search({ onSearchText, searchText}) {


return(
  <div className="searchbar">
    <label htmlFor="search">Search Movies: </label>
    <input
    type="text"
    id="search"
    className="search-input"
    placeholder="Search by Name, Actor or Director"
    onChange={onSearchText}
    value={searchText}
    />
  </div>
)
}

export default Search;