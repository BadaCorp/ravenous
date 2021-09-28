import {useState} from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp'

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  // useEffect(() => {
  //   searchYelp()
  // });

  const searchYelp = (term, location, sortBy) => {
    // setBusinesses([]);
    Yelp.search(term, location, sortBy).then((business) => {
      console.log('business: ', business);
      setBusinesses(business);
    })
    console.log('businessses: ', businesses);
  };

  return (
    <div className="App">
      {/* {Yelp.searchYelp('Mexican', 'Seattle', 'best_match').then(buss => console.log(buss.id))} */}
      <h1>ravenous</h1>
      <SearchBar 
        searchYelp={searchYelp}
      />
      <BusinessList businesses={businesses} /> 
    </div>
  );
};

export default App;
