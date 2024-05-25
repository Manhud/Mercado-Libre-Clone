import { ItemApiResponse, Item } from '@/types/item';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
  }

  try {
    const itemResponse = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const itemData = await itemResponse.json();

    const descriptionResponse = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const descriptionData = await descriptionResponse.json();

    const categoriesResponse = await fetch(`https://api.mercadolibre.com/categories/${itemData.category_id}`);
    const categoriesData = await categoriesResponse.json();

    const categories = categoriesData.path_from_root.map((category: { id: string; name: string }) => category.name);
    
    const itemDetails: Item = {
      id: itemData.id,
      title: itemData.title,
      price: {
        currency: itemData.currency_id,
        amount: itemData.price,
        decimals: 2,
      },
      picture: itemData.pictures[0].secure_url,
      condition: itemData.condition,
      free_shipping: itemData.shipping.free_shipping,
      sold_quantity: itemData.sold_quantity,
      description: descriptionData.plain_text,
      categories
    };
    
    const apiResponse: ItemApiResponse = {
      author: {
        name: 'Juan ',
        lastname: 'Rozo',
      },
      item: itemDetails,
    };

    return NextResponse.json(apiResponse);
  } catch (error) {
    console.error('Error fetching item details:', error);
    return NextResponse.json({ error: 'Failed to fetch item details' }, { status: 500 });
  }
}
