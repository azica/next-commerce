"use client"
import useSWR, { SWRResponse } from "swr";

export const useAllCategories = () => {
  const { data, error }: SWRResponse<string[], ErrorResponse> = useSWR("categories", getAllCategories);
  
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  };
};

const getAllCategories = async (): Promise<string[]> => {
  const response = await fetch(`/api/categories`);
  return response.json();
};
