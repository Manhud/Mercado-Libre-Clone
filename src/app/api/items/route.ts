import { SearchApiResponse } from '@/types/search';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${query}`);
    const data = await response.json();
    const categories = data?.filters?.find((filter: any) => filter.id === 'category')?.values[0]?.path_from_root?.map((cat: any) => cat.name) || [];
    
    const items = data?.results?.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 2,
      },
      category: item.category_id,
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));

    const apiResponse: SearchApiResponse = {
      author: {
        name: 'Juan',
        lastname: 'Rozo',
      },
      categories,
      items,
    };

    return NextResponse.json(apiResponse);
  } catch (error) {
    console.error('Error fetching search results:', error);
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}
