import { SearchApiResponse } from "@/types/search";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const fetchSearchResults = async (query: string, limit: number, offset: number): Promise<SearchApiResponse> => {
  const response = await fetch(`${baseURL}/api/items?q=${query}&limit=${limit}&offset=${offset}`);
  if (!response.ok) {
    throw new Error('Failed to fetch search results');
  }
  return await response.json();
};
