import { Billboard } from "@/types"

const Url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`


export const getBillboard = async (id: string): Promise<Billboard> => {
  const response = await fetch(`${Url}/${id}`, { cache: 'no-cache' })

  return response.json()
}