import { Size } from "@/types"

const Url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`


export const getSizes = async (): Promise<Size[]> => {
  const response = await fetch(Url, { cache: 'no-cache' })
  return response.json()
}