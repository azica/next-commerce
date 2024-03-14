import { NextRequest } from "next/server";

import { API_DUMMY } from "@/shared/constants";


export async function GET(req: NextRequest) {
    try {
        const searchParams = req.nextUrl.searchParams;

        const query = searchParams.get("query")

        const response = await fetch(`${API_DUMMY}/products/search/?q=${query}`);

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