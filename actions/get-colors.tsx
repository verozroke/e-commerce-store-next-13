import { Color } from "@/types"

const Url = `${process.env.NEXT_PUBLIC_API_URL}/colors`


export const getColors = async (): Promise<Color[]> => {
  const response = await fetch(Url, { cache: 'no-cache' })
  return response.json()
}