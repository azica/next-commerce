import { NextRequest } from "next/server";

import { API_URL } from "@/shared/constants";


export async function GET(req: NextRequest, res: Response) {      
  try {
    const param = req.nextUrl.searchParams
    const searchParams = new URLSearchParams(req.url.split('?')[1] ?? '');
    
    const response = await fetch(`${API_URL}/products?${searchParams}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return Response.json(data);

  } catch (error) {
    return Response.json(error);
  }
}