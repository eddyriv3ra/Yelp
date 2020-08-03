const apiKey =
  "Bearer 5zee3zxNhfgBb8ZpYxgGHeVtQ8NZAn8dPoiPzmiLhWLU09LOisY1hMvVrUBjhMp9MxniPrsTOjQvQhvmZY-vefE8pV3e_HeHWd-_Qg5poTl3s7P81m0o5FZeSXwbX3Yx";

type businessesValue = {
  searchValue: string;
  limit: number;
  location: string;
};

type businessValue = {
  businessId: string;
};

export const getBusinesses = async (
  _: string,
  { searchValue, limit, location }: businessesValue,
): Promise<any> => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${searchValue}&limit=${limit}&location=${location}`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: apiKey,
    },
  });

  return response.json();
};

export const getBusiness = async (
  _: string,
  { businessId }: businessValue,
): Promise<any> => {
  const url = `https://api.yelp.com/v3/businesses/${businessId}`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: apiKey,
    },
  });
  return response.json();
};
