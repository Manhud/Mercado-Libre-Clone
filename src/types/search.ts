export interface Items {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  category: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface SearchApiResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Items[];
}