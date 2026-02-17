import { SetStateAction, useState } from "react";
import "./SearchBar.scss";

type SearchBarProps = {
  searchYelp: any;
  isLoading: boolean;
};

const SearchBar = ({ searchYelp, isLoading }: SearchBarProps) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const sortByOptions: { [key: string]: any } = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
  };

  const getSortByClass = (sortByOption: string) => {
    if (sortBy === sortByOption) {
      return "active";
    } else {
      return "";
    }
  };

  const handleSortByChange = (sortByOption: string) => {
    if (isLoading) return;
    setSortBy(sortByOption);
  };

  const handleTermChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setLocation(event.target.value);
  };

  const triggerSearch = () => {
    if (isLoading) return;
    searchYelp(term, location, sortBy);
  };

  const handleSearch = (event: { preventDefault: () => void }) => {
    triggerSearch();
    event.preventDefault();
  };

  const handleEnterKey = (event: { key: string; preventDefault: () => void }) => {
    if (event.key === "Enter") {
      triggerSearch();
      event.preventDefault();
    }
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      const sortByOptionValue: any = sortByOptions[sortByOption];
      return (
        <li
          className={getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={() => handleSortByChange(sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <section className={`SearchBar ${isLoading ? "is-loading" : ""}`}>
      <p className="SearchBar-eyebrow">Curated Search</p>
      <h2>Discover your next go-to spot</h2>
      <div className="SearchBar-sort-options">
        <ul>{renderSortByOptions()}</ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search businesses"
          onChange={handleTermChange}
          onKeyDown={handleEnterKey}
          disabled={isLoading}
        />
        <input
          placeholder="Where?"
          onChange={handleLocationChange}
          onKeyDown={handleEnterKey}
          disabled={isLoading}
        />
      </div>

      <div className="SearchBar-submit">
        <button onClick={handleSearch} type="button" disabled={isLoading}>
          {isLoading ? "Searching..." : "Let's Go"}
        </button>
      </div>
      <p className="SearchBar-feedback">
        {isLoading
          ? "Gathering the strongest matches for you..."
          : "Search by dish, vibe, or business name."}
      </p>
    </section>
  );
};

export default SearchBar;
