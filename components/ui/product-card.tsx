"use client"

import type { Product } from '@/types'
import Image from 'next/image'
import { FC, MouseEventHandler } from 'react'
import IconButton from './icon-button'
import { Expand, ShoppingCart } from 'lucide-react'
import Currency from './currency'
import { useRouter } from 'next/navigation'
import usePreviewModal from '@/hooks/use-preview-modal'
import useCart from '@/hooks/use-cart'

interface ProductCardProps {
  data: Product
}

const ProductCard: FC<ProductCardProps> = ({ data }) => {

  const previewModal = usePreviewModal()
  const router = useRouter()
  const cart = useCart()

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    previewModal.onOpen(data)
  }

  const onAddToCard: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()

    cart.addItem(data)
  }



  return <div onClick={() => router.push(`/product/${data.id}`)} className='bg-white group cursor-pointer border space-y-4 rounded-xl p-3'>
    <div className="aspect-square relative rounded-xl bg-gray-100">
      <Image
        src={data.image.url}
        alt='Image'
        fill
        className='aspect-square object-cover rounded-md'
      />
      <div className="opacity-0 group-hover:opacity-100 transition absolute w-full bottom-5 px-6">
        <div className="flex justify-center gap-x-6">
          <IconButton
            onClick={onPreview}
            icon={<Expand className='text-gray-600' size={20} />}
          />
          <IconButton
            onClick={onAddToCard}
            icon={<ShoppingCart className='text-gray-600' size={20} />}
          />
        </div>
      </div>
    </div>
    <div>
      <p className='font-semibold text-lg'>{data.name}</p>
      <p className='text-sm text-gray-600'>{data.category.name}</p>
    </div>
    <div className="flex items-center justify-between">
      <Currency value={data.price} />
    </div>
  </div>
}

export default ProductCard