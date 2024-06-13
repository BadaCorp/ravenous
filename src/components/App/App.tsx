import { useState } from "react";
import "./App.scss";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";
import ReactLoading from "react-loading";

export interface BusinessConfig {
  id: string;
  imageSrc: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  category: string;
  rating: number;
  reviewCount: number;
}

export const App = () => {
  const [businesses, setBusinesses] = useState<BusinessConfig[]>([]);
  const [inputError, setInputError] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchYelp = (term: string, location: string, sortBy: string) => {
    setLoading(true);
    Yelp.search(term, location, sortBy)
      .then((business) => {
        if (business) {
          setBusinesses(business);
          setInputError(false);
        } else {
          setBusinesses([]);
          setInputError(true);
        }
      })
      .catch((err) => {});
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={searchYelp} />

      {loading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "20vh",
          }}
        >
          <ReactLoading type="spin" color="gold" />
        </div>
      )}

      {inputError && (
        <div className="error-msg">
          <p className="error-msg-center">Inputs invalid!</p>
          <br />
          <p>
            Please, enter the name of a resturant business (e.g. Pizza, KFC,
            Mexican etc.) and the name of a city or country (e.g. Lisbon,
            Toronto, U.S, Cancun etc.)
          </p>
        </div>
      )}

      <BusinessList businesses={businesses} />
    </div>
  );
};

// export default App;
