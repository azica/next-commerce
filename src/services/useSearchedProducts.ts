"use client"
import { useSearchParams } from 'next/navigation';
import useSWR, { SWRResponse } from "swr";

import { fetcher, getQueryString } from '@/shared/helpers/utils';

export const useSearchedProducts = <T>({ limit }: { limit?: string } = {}) => {
    const searchParams = useSearchParams();

    const currentQueryString = getQueryString(searchParams, limit);

    const { data, error, isLoading }: SWRResponse<unknown, ErrorResponse> = useSWR(
        `/api/products/search/?${currentQueryString}`,
        fetcher,
        { suspense: true }
    );

    return {
        products: data as T,
        isLoading,
        error
    };
};
