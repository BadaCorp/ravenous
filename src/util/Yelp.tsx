interface Business {
  id: string;
  image_url: string;
  name: string;
  url: string;
  location: Record<string, any>;
  categories: Record<string, any>[];
  rating: number;
  review_count: number;
}

const yelp = {
  async search(term: string, location: string) {
    const query = new URLSearchParams({
      term,
      location,
      sort_by: "best_match",
    });

    const response = await fetch(
      `https://ravenous-api.onrender.com/yelp?${query.toString()}`,
    );

    if (!response.ok) {
      throw new Error(`Search request failed with status ${response.status}`);
    }

    const jsonResponse = await response.json();

    if (!Array.isArray(jsonResponse.businesses)) {
      return [];
    }

    return jsonResponse.businesses.map((business: Business) => {
      return {
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        url: business.url ?? "",
        address: business.location?.address1 ?? "",
        city: business.location?.city ?? "",
        state: business.location?.state ?? "",
        zipCode: business.location?.zip_code ?? "",
        category: business.categories?.[0]?.title ?? "General",
        rating: business.rating,
        reviewCount: business.review_count,
      };
    });
  },
};

export default yelp;
