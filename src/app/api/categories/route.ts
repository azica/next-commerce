import { API_DUMMY } from "@/shared/constants";

export async function GET() {
  try {
    const response = await fetch(`${API_DUMMY}/products/categories`)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json()

    return Response.json(data)

  } catch (error) {
    return Response.json(error);
  }
}