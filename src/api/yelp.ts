const apiKey =
  "Bearer 5zee3zxNhfgBb8ZpYxgGHeVtQ8NZAn8dPoiPzmiLhWLU09LOisY1hMvVrUBjhMp9MxniPrsTOjQvQhvmZY-vefE8pV3e_HeHWd-_Qg5poTl3s7P81m0o5FZeSXwbX3Yx";

export const getBusinesses = async (
  _: string,
  term: string,
  limit: number = 50,
  location: string = "san jose"
) => {
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
