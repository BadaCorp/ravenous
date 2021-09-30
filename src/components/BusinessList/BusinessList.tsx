import './BusinessList.css';
import Business from '../Business/Business';

type BusinessesProps = {
    businesses: [
        business: {
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
        },
    ],
};

const BusinessList = ({businesses}: BusinessesProps) => {
    return (
        <div className="BusinessList">
            {businesses.map((business, i) => {
                return <Business key={business.id} business={business} />
            })}
        </div>
    );
};

export default BusinessList;