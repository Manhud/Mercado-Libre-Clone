import { ItemApiResponse } from "@/types/item";


const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchItemDetails = async (id: string): Promise<ItemApiResponse> => {
  const response = await fetch(`${baseURL}/api/items/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch item details');
  }
  return await response.json();
};
