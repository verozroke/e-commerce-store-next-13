import { Category } from "@/types"

const Url = `${process.env.NEXT_PUBLIC_API_URL}/categories`


export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(Url, { cache: 'no-cache' })

  return response.json()
}