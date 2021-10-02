import {SetStateAction, useState} from 'react';
import './SearchBar.scss';

type SearchBarProps = {
    searchYelp: any,
}

const SearchBar = ({searchYelp}: SearchBarProps) => {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const sortByOptions: { [key: string]: any } = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
    };

    const getSortByClass = (sortByOption: string) => {
        if(sortBy === sortByOption) {
            return 'active';
        }
        else {
            return '';
        }
    };

    const handleSortByChange = (sortByOption: string) => {
        setSortBy(sortByOption);
    };

    const handleTermChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setLocation(event.target.value);
    };

    const handleSearch = (event: { preventDefault: () => void; }) => {
        searchYelp(term, location, sortBy);
        event.preventDefault();
    };

    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map((sortByOption) => {
            let sortByOptionValue: any = sortByOptions[sortByOption];
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
                    href='#ravenous'
                >
                        Let's Go
                </a>
            </div>
        </div>
    )
};

export default SearchBar;