import {useState} from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp'

const App = () => {
  const [businesses, setBusinesses] = useState([]);
  const [error, setError] = useState(false); 

  // useEffect(() => {
  //   searchYelp()
  // });

  const searchYelp = (term, location, sortBy) => {
    // setBusinesses([]);
    Yelp.search(term, location, sortBy).then((business) => {
      // console.log('business: ', business);
      if(business) {
        setBusinesses(business);
        setError(false);
      }
      else {
        setBusinesses([]);
        setError(true);
      }
    })
    .then((err) => {
      console.log(`Error: Search inputs are ${err}`)
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
      {error? 
        <div className='error-msg'>
          <p className='error-msg-center'>Inputs invalid!</p><br />
          <p>Please, enter the name of a resturant business (e.g. Pizza, KFC, Mexican etc.) and the name of a city or country (e.g. Lisbon, Toronto, U.S, Cancun etc.)</p>
        </div> : 
        ''
      }
      <BusinessList businesses={businesses} />

    </div>
  );
};

export default App;
