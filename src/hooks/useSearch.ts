import * as Querys from "react-query";
import { getBusinesses } from "../api/yelp";

const { useQuery }: any = Querys;

type useSearchResult = {
  businesses: Array<any>;
  total: number;
};

const useSearch = (searchValue: string): useSearchResult => {
  const { data } = useQuery(
    ["business", { searchValue, limit: 50, location: "san+jose" }],
    getBusinesses,
  );
  return data || {};
};

export default useSearch;
