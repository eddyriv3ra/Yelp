import * as Querys from "react-query";
import { getBusiness } from "../api/yelp";

const { useQuery }: any = Querys;

type useBusinessByIdTye = {
  photos: Array<string>;
  name: string;
};

const useBusinessById = (businessId: string): useBusinessByIdTye => {
  const { data } = useQuery(["business", { businessId }], getBusiness);
  return data || {};
};

export default useBusinessById;
