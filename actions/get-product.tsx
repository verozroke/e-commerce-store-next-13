import { Product } from "@/types"

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`


export const getProduct = async (id: string): Promise<Product> => {
  const response = await fetch(`${Url}/${id}`, { cache: 'no-cache' })

  return response.json()
}