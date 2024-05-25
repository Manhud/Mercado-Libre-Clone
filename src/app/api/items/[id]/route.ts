import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (!id) {
    return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
  }

  try {
    const itemResponse = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const itemData = await itemResponse.json();
console.log(itemData);
    const descriptionResponse = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const descriptionData = await descriptionResponse.json();
console.log(descriptionData);
    const itemDetails: ItemDetails = {
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
    };

    const apiResponse: ApiResponse = {
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
