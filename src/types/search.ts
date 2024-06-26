import { Item } from "./item";


export interface SearchApiResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
  total: number;
  limit: number;
  offset: number;
}