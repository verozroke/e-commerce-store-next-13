import { Billboard, Product } from "@/types"
import qs from 'query-string'

const Url = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

export const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: Url,
    query: {
      categoryId: query.categoryId,
      colorId: query.colorId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    }
  })



  const response = await fetch(url, { cache: 'no-cache' })


  return response.json()
}