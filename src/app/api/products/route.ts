import { NextRequest } from "next/server";

import { API_DAMMY } from "@/shared/constants";


export async function GET(req: NextRequest, res: Response) {      
  try {
    const searchParams = req.nextUrl.searchParams;
    const category = searchParams.get("category")

    let apiUrl = `${API_DAMMY}/products`;

    if (category) {
      apiUrl = `${API_DAMMY}/products/category/${category}`;
    }

    const paramsArray = Array.from(searchParams.entries())
    .filter(([key]) => key !== "category")
    .map(([key, value]) => `${key}=${value}`) 
    .join("&");

    if (paramsArray) {
      apiUrl += `?${paramsArray}`;
    }
console.log(apiUrl)
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const products = data.products;
    return Response.json(products);

  } catch (error) {
    return Response.json(error);
  }
}