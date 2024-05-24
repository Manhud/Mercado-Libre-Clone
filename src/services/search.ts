import { SearchApiResponse } from "@/types/search";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchSearchResults = async (query: string): Promise<SearchApiResponse> => {
  const response = await fetch(`${baseURL}/api/items?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }
  return await response.json();
};

export const fetchCategories = async (query: string): Promise<SearchApiResponse> => {
  const response = await fetch(`${baseURL}/api/items?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }
  return await response.json();
};
