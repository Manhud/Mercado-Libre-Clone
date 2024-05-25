
export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  category?: string;
  picture: string;
  sold_quantity?: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
  categories?: string[];
}

export interface ItemApiResponse {
  author: {
    name: string;
    lastname: string;
  };
  item: Item;
}