import { NextRequest, NextResponse } from "next/server";

import { API_DUMMY } from "@/shared/constants";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const queryParams = new URL(req.url, 'http://localhost').searchParams;
    const category = queryParams.get("category");

    let apiUrl = `${API_DUMMY}/products`;

    if (category) {
      apiUrl = `${API_DUMMY}/products/category/${category}`;
    }

    const paramsArray = Array.from(queryParams.entries())
      .filter(([key]) => key !== "category")
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    if (paramsArray) {
      apiUrl += `?${paramsArray}`;
    }

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();
    console.log(paramsArray)
    return NextResponse.json<Response.GetProducts>(products);

  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}


