interface ItemDetails {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
}

interface ApiResponse {
  author: {
    name: string;
    lastname: string;
  };
  item: ItemDetails;
}

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchItemDetails = async (id: string): Promise<ApiResponse> => {
  const response = await fetch(`${baseURL}/api/items/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch item details');
  }
  return await response.json();
};
