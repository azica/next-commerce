import { API_URL } from "@/shared/constants";


export async function GET(req: Request, { params }: { params: { id: string } }) {      
  try {

    const response = await fetch(`${API_URL}/products/${params.id}`);

    console.log(params.id)
    console.log(response)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return Response.json(data);

  } catch (error) {
    return Response.json(error);
  }
}