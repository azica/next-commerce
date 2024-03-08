"use client"
import { useSearchParams } from 'next/navigation';
import useSWR, { SWRResponse } from "swr";

import { fetcher, getQueryString } from '@/shared/helpers/utils';

export const useAllProducts = <T>() => {
  const searchParams = useSearchParams();
  const currentQueryString = getQueryString(searchParams);

  const { data, error, isLoading }: SWRResponse<unknown, ErrorResponse> = useSWR(
    `/api/products?${currentQueryString}`,
    fetcher,
    { suspense: true }
  );

  return {
    products: data as T,
    isLoading,
    error
  };
};

