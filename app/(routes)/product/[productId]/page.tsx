import { getProduct } from '@/actions/get-product'
import { getProducts } from '@/actions/get-products'
import ProductList from '@/components/ProductList'
import Container from '@/components/ui/container'
import { FC } from 'react'
import Image from 'next/image';
import Info from '@/components/Info'

interface pageProps {
  params: {
    productId: string
  }
}

const page: FC<pageProps> = async ({ params }) => {
  const product = await getProduct(params.productId)
  const suggestedProducts = await getProducts({
    categoryId: product.category.id
  })
  return <div className="bg-white">
    <Container>
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 ">
          <div className="relative w-full aspect-square rounded-md">
            <Image src={product.image.url} alt='Image' fill className="absolute inset-0 aspect-square object-cover rounded-md"></Image>
          </div>

          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} />
          </div>
        </div>
        <hr className='my-10' />
        <ProductList title="Related Items" items={suggestedProducts} />
      </div>
    </Container>
  </div>
}

export default page