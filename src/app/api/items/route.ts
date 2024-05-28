import { NextRequest, NextResponse } from 'next/server';
import { SearchApiResponse } from '@/types/search';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q') || '';
  const limit = parseInt(searchParams.get('limit') || '10');
  const offset = parseInt(searchParams.get('offset') || '0');

  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${query}&limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const items = data.results.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 2,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
    }));

    const categories = data.filters.find((filter: any) => filter.id === 'category')?.values[0]?.path_from_root.map((category: any) => category.name) || [];

    const apiResponse: SearchApiResponse = {
      author: {
        name: 'Juan',
        lastname: 'Rozo',
      },
      categories,
      items,
      total: data.paging.total,
      limit: data.paging.limit,
      offset: data.paging.offset,
    };

    return NextResponse.json(apiResponse);
  } catch (error) {
    console.error('Error fetching search results:', error);
    return NextResponse.json({ error: 'Failed to fetch search results' }, { status: 500 });
  }
}
