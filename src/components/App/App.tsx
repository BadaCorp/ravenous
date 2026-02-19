import { useEffect, useState } from "react";
import "./App.scss";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";
import ReactLoading from "react-loading";
import brandMark from "./ravenous-logo.svg";

export interface BusinessConfig {
  id: string;
  imageSrc: string;
  name: string;
  url: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  category: string;
  rating: number;
  reviewCount: number;
}

type SortByOption = "best_match" | "rating" | "review_count";

const sortBusinesses = (
  items: BusinessConfig[],
  sortBy: SortByOption,
): BusinessConfig[] => {
  const sorted = [...items];

  if (sortBy === "rating") {
    return sorted.sort(
      (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
    );
  }

  if (sortBy === "review_count") {
    return sorted.sort(
      (a, b) => b.reviewCount - a.reviewCount || b.rating - a.rating,
    );
  }

  return sorted;
};

export const App = () => {
  const currentYear = new Date().getFullYear();
  const [rawBusinesses, setRawBusinesses] = useState<BusinessConfig[]>([]);
  const [businesses, setBusinesses] = useState<BusinessConfig[]>([]);
  const [activeSortBy, setActiveSortBy] = useState<SortByOption>("best_match");
  const [inputError, setInputError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [lastSearch, setLastSearch] = useState({ term: "", location: "" });
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      setLoadProgress(0);
      return;
    }

    const startTime = Date.now();
    setLoadProgress(3);

    const intervalId = setInterval(() => {
      const elapsedSeconds = (Date.now() - startTime) / 1000;
      const estimatedPercent = Math.round((elapsedSeconds / 60) * 100);
      setLoadProgress(Math.min(95, Math.max(3, estimatedPercent)));
    }, 500);

    return () => clearInterval(intervalId);
  }, [isLoading]);

  useEffect(() => {
    setBusinesses(sortBusinesses(rawBusinesses, activeSortBy));
  }, [rawBusinesses, activeSortBy]);

  const searchYelp = (term: string, location: string) => {
    const cleanedTerm = term.trim();
    const cleanedLocation = location.trim();

    setHasSearched(true);
    setInputError(false);
    setServerError(false);

    if (!cleanedTerm || !cleanedLocation) {
      setRawBusinesses([]);
      setBusinesses([]);
      setIsLoading(false);
      setInputError(true);
      return;
    }

    setLastSearch({ term: cleanedTerm, location: cleanedLocation });
    setRawBusinesses([]);
    setBusinesses([]);
    setLoadProgress(3);
    setIsLoading(true);
    Yelp.search(cleanedTerm, cleanedLocation)
      .then((results) => {
        setRawBusinesses(results);
      })
      .catch(() => {
        setRawBusinesses([]);
        setBusinesses([]);
        setServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSortByChange = (sortBy: string) => {
    if (
      sortBy === "best_match" ||
      sortBy === "rating" ||
      sortBy === "review_count"
    ) {
      setActiveSortBy(sortBy);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="brand-lockup">
          <img src={brandMark} alt="Ravenous logo" className="brand-mark" />
          <div>
            <p className="brand-tag">Neighborhood search guide</p>
            <h1>ravenous</h1>
          </div>
        </div>
        <p className="App-lede">
          Find places worth craving. Search by dish, vibe, or neighborhood and
          compare top-rated spots in seconds.
        </p>
      </header>

      <section className="search-stage">
        <SearchBar
          searchYelp={searchYelp}
          isLoading={isLoading}
          sortBy={activeSortBy}
          onSortByChange={handleSortByChange}
        />
      </section>

      {isLoading && (
        <section className="loading-state" aria-live="polite">
          <div className="loading-headline">
            <div className="loading-progress">
              <ReactLoading
                type="spin"
                color="#f09a49"
                width={34}
                height={34}
              />
              <p className="loading-progress-value">{loadProgress}%</p>
            </div>
            <div>
              <h2>Searching now</h2>
              <p>
                Looking for <strong>{lastSearch.term}</strong> in{" "}
                <strong>{lastSearch.location}</strong>.
              </p>
              <p className="loading-progress-label">
                {loadProgress >= 95
                  ? "Finalizing your results..."
                  : `Estimated warm-up: about ${Math.max(
                      4,
                      Math.ceil((100 - loadProgress) * 0.6),
                    )}s remaining`}
              </p>
            </div>
          </div>
          <div className="loading-grid">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <article className="loading-card" key={item}>
                <div className="loading-card-image" />
                <div className="loading-card-line loading-card-line-main" />
                <div className="loading-card-line" />
                <div className="loading-card-line loading-card-line-short" />
              </article>
            ))}
          </div>
        </section>
      )}

      {inputError && (
        <div className="error-msg">
          <p className="error-msg-center">Missing search details</p>
          <p>
            Enter both a business type and location, for example{" "}
            <strong>pizza in Toronto</strong> or{" "}
            <strong>sushi in Lisbon</strong>.
          </p>
        </div>
      )}

      {serverError && (
        <div className="error-msg">
          <p className="error-msg-center">Server unavailable</p>
          <p>
            Unable to reach the search server right now. It may be waking up, so
            try again in 30-60 seconds.
          </p>
        </div>
      )}

      {!isLoading && !hasSearched && !inputError && !serverError && (
        <section className="empty-state">
          <h2>Start with a vibe</h2>
          <p>Try a quick search idea to surface your next go-to spot.</p>
          <div className="idea-row">
            <span>brunch patios</span>
            <span>late night ramen</span>
            <span>cozy coffee shops</span>
          </div>
        </section>
      )}

      {!isLoading &&
        hasSearched &&
        !inputError &&
        !serverError &&
        businesses.length === 0 && (
          <section className="no-results">
            <h2>No matches yet</h2>
            <p>Try another term, neighborhood, or switch the sort option.</p>
          </section>
        )}

      {businesses.length > 0 && (
        <section className="results-intro">
          <h2>Top picks</h2>
          <p>
            {businesses.length} {businesses.length === 1 ? "place" : "places"}{" "}
            to explore right now
          </p>
          <p className="results-sort-note">
            Sorted by{" "}
            {activeSortBy === "best_match"
              ? "Best Match"
              : activeSortBy === "rating"
                ? "Highest Rated"
                : "Most Reviewed"}
          </p>
        </section>
      )}

      {!isLoading && <BusinessList businesses={businesses} />}

      <footer className="site-footer">
        <p>© {currentYear} ravenous. Built for local business discovery.</p>
        <p className="site-footer-meta">Data powered by Yelp Fusion API.</p>
      </footer>
    </div>
  );
};

// export default App;
