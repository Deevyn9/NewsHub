import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";

const SearchModal = ({
  openSearchModal,
  handleCloseSearch,
  handleSearch,
  setSearchQuery,
  setSelectedSource,
  setSelectedCategory,
  setSelectedDate,
  handleUndoFilters,
  undoFilters,
}) => {
  return (
    <div className={`searchModal ${openSearchModal && "active"}`}>
      <div className="search-header">
        <ArrowBackIcon
          className="backArrow"
          onClick={() => handleCloseSearch()}
        />

        <div className="input-area">
          <SearchIcon className="modal-searchicon" />
          <input
            type="text"
            placeholder="Search for Keywords"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-source">
        <label htmlFor="">Select Source</label>
        <select
          name="Sources"
          onChange={(e) => setSelectedSource(e.target.value)}
        >
          <option value="all">all</option>
          <option value="News API">News.org</option>
          <option value="The Guardian">Guardian</option>
          <option value="New York Times">New York Times</option>
        </select>
      </div>

      <div className="filter-categories">
        <label htmlFor="">Filter Category</label>
        <select
          name="Category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          disabled
        >
          <option value="all">all</option>
          <option value="Busines">Business</option>
          <option value="Science">Science</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      <div className="select-date">
        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          name="date"
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      <div className="button-container">
        {undoFilters && (
          <button className="undo-button" onClick={handleUndoFilters}>
            Undo Filters
          </button>
        )}
        <button onClick={handleSearch}>Save Changes</button>
      </div>
    </div>
  );
};

export default SearchModal;
