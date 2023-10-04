import { Category } from "@/types"

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`


export const getCategory = async (id: string): Promise<Category> => {
  const response = await fetch(`${Url}/${id}`, { cache: 'no-cache' })

  return response.json()
}