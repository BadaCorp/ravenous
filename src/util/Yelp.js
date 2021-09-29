const apiKey = 'CPCkBOEMDrCBr1oLQ5RSKh9jEGzmiIOirjlVfitBaSGvnwcHLmmSNQbWb5mLfmYc4YhqSMckgZe89dfKy-VCvtHxl_9n-P2QLSFqhOwvEV6IOVmiQpPcMEXvIbNSYXYx';

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}/:splat 200`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    //console.log(business);
                    return {
                        'id': business.id,
                        'imageSrc': business.image_url,
                        'name': business.name,
                        'address': business.location.address1,
                        'city': business.location.city,
                        'state': business.location.state,
                        'zipCode': business.location.zip_code,
                        'category': business.categories[0].title,
                        'rating': business.rating,
                        'reviewCount': business.review_count,
                    };
                })
            }
        });
    }
};

export default yelp;