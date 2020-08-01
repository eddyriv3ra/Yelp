const apiKey =
  "Bearer 5zee3zxNhfgBb8ZpYxgGHeVtQ8NZAn8dPoiPzmiLhWLU09LOisY1hMvVrUBjhMp9MxniPrsTOjQvQhvmZY-vefE8pV3e_HeHWd-_Qg5poTl3s7P81m0o5FZeSXwbX3Yx";

type values = {
  term: string;
  limit: number;
  location: string;
};

export const getBusinesses = async (
  _: string,
  { term, limit, location }: values,
): Promise<any> => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&limit=${limit}&location=${location}`;
  const response = await fetch(url, {
    method: "get",
    headers: {
      Authorization: apiKey,
      "Content-type": "application/json",
    },
  });

  return response.json();
};
