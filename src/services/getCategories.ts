"use client"
import useSWR, { SWRResponse } from "swr";

export const useAllCategories = () => {
  const { data, error, isLoading }: SWRResponse<Model.Category[], ErrorResponse> = useSWR("categories", getAllCategories);
  
  return {
    categories: data,
    isLoading: !error && !data,
    isError: error
  };
};

const getAllCategories = async (): Promise<Model.Category[]> => {
  const response = await fetch(`/api/categories`);
  return response.json();
};
