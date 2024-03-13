"use client"
import { useSearchParams } from 'next/navigation';
import useSWR, { SWRResponse } from "swr";

import { fetcher, getQueryString } from '@/shared/helpers/utils';

export const useAllProducts = <T>({limit}:{ limit?: string } = {}) => {
  const searchParams = useSearchParams();

  const currentQueryString = getQueryString(searchParams, limit);

  console.log(currentQueryString)
  
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

