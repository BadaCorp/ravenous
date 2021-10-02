import {useState, useEffect} from 'react';
import './App.scss';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp'

export interface BusinessConfig {
  id: string,
  imageSrc: string,
  name: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  category: string,
  rating: number,
  reviewCount: number,
};

export const App = () => {
  const [businesses, setBusinesses] = useState<BusinessConfig[]>([]);
  const [inputError, setInputError] = useState(false);
  const [corsError, setCorsError] = useState(false); 

  useEffect(() => {
    alert('Please go to this link below to temporarily enable CORS before using the app:\nhttps://cors-anywhere.herokuapp.com/corsdemo');
  }, []);

  const searchYelp = (term:string, location:string, sortBy:string) => {
    Yelp.search(term, location, sortBy).then((business) => {
      if(business) {
        setBusinesses(business);
        setInputError(false);
        setCorsError(false);
      }
      else {
        setBusinesses([]);
        setInputError(true);
        console.log(`Error: Search inputs are Invalid`)
      }
    })
    .catch(err => {
      setCorsError(true);
      console.log('Error: ', err)
    });
  };

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar 
        searchYelp={searchYelp}
      />

      {corsError?
        <div className='error-msg'>
          <p className='error-msg-center'>
            The Yelp api does not support CORS. Please, make sure that you have temporarily enabled
              &nbsp;<a href='https://cors-anywhere.herokuapp.com/corsdemo' target='_blank' rel="noreferrer">CORS</a>&nbsp;
              in your browser inorder to use this app by navigating to this
              &nbsp;<a href='https://cors-anywhere.herokuapp.com/corsdemo' target='_blank' rel="noreferrer">link</a> and clicking on the 'Request temporary access to the demo server' button. For more information about CORS, click here:
              &nbsp;<a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS' target='_blank' rel="noreferrer">Cross-Origin Resource Sharing (CORS)</a> 
          </p>
        </div>: ''
      }

      {inputError? 
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

// export default App;
