import { useQuery } from "@tanstack/react-query";
import * as services from "../services";
import { IApiResponseLandingList } from "../types";

const useGetList = () => {
  const data = useQuery<IApiResponseLandingList>(
    ["landinginfo-list"],
    async () => {
      const filter = {
        // paged: true,
        // PageNumber: 1,
        // PageSize: 200
        // QuerySearch: param
      };

      const { data: axiosData } = await services.getList(filter);
      return axiosData;
    },
    { keepPreviousData: true }
  );
  return data;
};

export default useGetList;
