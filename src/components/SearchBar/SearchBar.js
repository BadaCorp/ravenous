import {useState} from 'react';
import './SearchBar.css';

const SearchBar = ({searchYelp}) => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');
    // const [sortByOptions, setSortByOptions] = useState({
    //     'Best Match': 'best_match',
    //     'Highest Rated': 'rating',
    //     'Most Reviewed': 'review_count'
    // });

    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const getSortByClass = (sortByOption) => {
        if(sortBy === sortByOption) {
            return 'active';
        }
        else {
            return '';
        }
    };

    const handleSortByChange = (sortByOption) => {
        setSortBy(sortByOption);
        console.log('sortByOption: ', sortByOption);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
        console.log('Term: ', term);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        console.log('Location: ', location);
    };

    const handleSearch = (event) => {
        searchYelp(term, location, sortBy);
        event.preventDefault();
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li 
                    className={getSortByClass(sortByOptionValue)} 
                    key={sortByOptionValue}
                    onClick={() => handleSortByChange(sortByOptionValue)}
                >
                    {sortByOption}</li>
        });
    };

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                    {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input 
                    placeholder="Search Businesses"
                    onChange={handleTermChange}
                />
                <input 
                    placeholder="Where?" 
                    onChange={handleLocationChange}
                />
            </div>
            <div className="SearchBar-submit">
                <a 
                    onClick={handleSearch}
                    href='#dummyLink'>
                        Let's Go
                </a>
            </div>
        </div>
    )
};

export default SearchBar;