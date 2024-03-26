

import { useSearchParams } from "next/navigation";
import useSWR from "swr";

import { fetcher, getQueryString } from '@/shared/helpers/utils';

export const useAllProducts = <T>({ limit }: { limit?: string } = {}) => {
  const searchParams = useSearchParams();
  const currentQueryString = getQueryString(searchParams, limit);

  const { data, error, isValidating: isLoading } = useSWR<Response.GetProducts | undefined>(
    `/api/products?${currentQueryString}`,
    fetcher,
    { suspense: true }
  );

  return {
    products: data?.products as T,
    isLoading,
    error
  };
};
