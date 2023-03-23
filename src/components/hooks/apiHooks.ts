import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import toast from "react-hot-toast";
import { getTemplateApi } from "../api/api";
import { QUERY_KEYS, STATUS } from "../constants";

export const useGetTemplate = () => {
  const { isLoading, data } = useQuery(
    [QUERY_KEYS.GET_TEMPLATE],
    getTemplateApi,
    {
      onSuccess(data) {
        if (data?.data) {
          if (data.data.status === STATUS.FAILURE_0) {
            toast.error(data.data.message);
          }
        }
      },
      onError(err) {
        toast.error(`Some issue while fetching data.`);
      },
    }
  );

  return useMemo(
    () => ({ isLoading, data: data?.data ?? {} }),
    [isLoading, data]
  );
};
