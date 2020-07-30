import * as Querys from "react-query";
import { getBusinesses } from "../api/yelp";
const useQuery: any = Querys.useQuery;

const useBusinessesSearch = (searchValue: string) => {
  return useQuery(["business", searchValue], getBusinesses);
};

export default useBusinessesSearch;
