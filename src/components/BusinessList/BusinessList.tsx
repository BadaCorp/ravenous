import './BusinessList.css';
import Business from '../Business/Business';
import {BusinessConfig} from '../App/App'

interface BusinessesListProps {
    businesses: BusinessConfig[];
  };
  

const BusinessList = ({businesses}: BusinessesListProps) => {
    return (
        <div className="BusinessList">
            {businesses.map((business, i) => {
                return <Business key={business.id} business={business} />
            })}
        </div>
    );
};

export default BusinessList;