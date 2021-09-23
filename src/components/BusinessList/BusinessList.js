import './BusinessList.css';
import Business from '../Business/Business';

const BusinessList = ({businesses}) => {
    return (
        <div className="BusinessList">
            {businesses.map(business => {
                return <Business business={business} />
            })}
        </div>
    );
};

export default BusinessList;