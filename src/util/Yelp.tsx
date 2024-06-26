interface Business {
  id: string;
  image_url: string;
  name: string;
  location: Record<string, any>;
  categories: Record<string, any>[];
  rating: number;
  review_count: number;
}

const yelp = {
  async search(term: string, location: string, sortBy: string) {
    const response = await fetch(
      `https://ravenous-api.onrender.com/yelp?term=${term}&location=${location}&sort_by=${sortBy}`
    );

    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map((business: Business) => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        };
      });
    }
  },
};

export default yelp;
